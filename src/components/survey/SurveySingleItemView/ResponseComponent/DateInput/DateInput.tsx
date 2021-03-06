import React, { useState, useEffect, useRef } from 'react';
import { ItemComponent, ResponseItem } from 'survey-engine/lib/data_types';
import DatePicker, { registerLocale } from "react-datepicker";
import { getLocaleStringTextByCode } from '../../utils';
import { nl, nlBE, fr, de, it } from 'date-fns/locale';
import { format } from 'date-fns';
import { addYears, getUnixTime } from 'date-fns';
import YearMonthSelector from './YearMonthSelector';

export const dateLocales = [
  { code: 'nl', locale: nl, format: 'dd-MM-yyyy' },
  { code: 'nl-be', locale: nlBE, format: 'dd.MM.yyyy' },
  { code: 'fr-be', locale: fr, format: 'dd.MM.yyyy' },
  { code: 'de-be', locale: de, format: 'dd.MM.yyyy' },
  { code: 'it', locale: it, format: 'dd/MM/yyyy' },
];

dateLocales.forEach(loc => {
  registerLocale(loc.code, loc.locale);
});


interface DateInputProps {
  componentKey: string;
  compDef: ItemComponent;
  prefill?: ResponseItem;
  responseChanged: (response: ResponseItem | undefined) => void;
  languageCode: string;
  disabled?: boolean;
  openCalendar: boolean | undefined;
}

const DateInput: React.FC<DateInputProps> = (props) => {
  const [response, setResponse] = useState<ResponseItem | undefined>(props.prefill);
  const [touched, setTouched] = useState(false);
  const datePickerRef = useRef<DatePicker>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    props.prefill && props.prefill.value ? new Date(parseInt(props.prefill.value) * 1000) : undefined,
  );

  useEffect(() => {
    if (touched) {
      const timer = setTimeout(() => {
        props.responseChanged(response);
      }, 200);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  useEffect(() => {
    if (props.openCalendar) {
      datePickerRef.current?.setOpen(true)
    }
  }, [props.openCalendar]);

  const handleDateChange = (date: Date | undefined) => {
    setTouched(true);

    setSelectedDate(date);
    if (!date) {
      setResponse(undefined);
      return;
    }

    setResponse(prev => {
      if (!date) { return undefined; }
      if (!prev) {
        return {
          key: props.compDef.key ? props.compDef.key : 'no key found',
          dtype: 'date',
          value: getUnixTime(date).toString(),
        }
      }
      return {
        ...prev,
        dtype: 'date',
        value: getUnixTime(date).toString(),
      }
    });
  }

  const minDate = props.compDef.properties?.min ? new Date((props.compDef.properties?.min as number) * 1000) : new Date(1900, 1);
  const maxDate = props.compDef.properties?.max ? new Date((props.compDef.properties?.max as number) * 1000) : addYears(new Date(), 100);

  const DatepickerContainer = ({ className, children }: any) => {
    return (
      <div className="shadow bg-white">
        <div className="react-datepicker__triangle"></div>
        <span className={className} >{children}</span>
      </div>
    )
  }

  const DatepickerHeader = ({ date, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }: any) => {
    return (
      <div className="my-1 d-flex justify-content-between">
        <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled} className="btn datepicker-arrow-btn p-0 ms-3 ">
          <span className="material-icons ">arrow_back</span>
        </button>
        <span>{format(date, 'MMMM yyyy', { locale: dateLocales.find(loc => loc.code === props.languageCode)?.locale })}</span>
        <button onClick={increaseMonth} disabled={nextMonthButtonDisabled} className="btn datepicker-arrow-btn p-0 me-3">
          <span className="material-icons ">arrow_forward</span>
        </button>
      </div>
    )
  }

  let datepicker = <p>{'...'}</p>;
  switch (props.compDef.properties?.dateInputMode) {
    case 'YM':
      datepicker = <YearMonthSelector
        currentDate={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleDateChange}
        languageCode={props.languageCode}
      />
      break;
    case 'Y':
      datepicker = <YearMonthSelector
        currentDate={selectedDate}
        minDate={minDate}
        maxDate={maxDate}
        onlyYear={true}
        onChange={handleDateChange}
        languageCode={props.languageCode}
      />
      break;
    default:
      datepicker = <div
        ref={wrapperRef}
        tabIndex={0}
        className="border-0 btn bg-white p-0 d-flex flex-row "
        onClick={() => datePickerRef.current?.setOpen(true)}
      >
        <DatePicker
          id={props.componentKey}
          ref={datePickerRef}
          className="form-control border-0 shadow-none p-1"
          selected={selectedDate}
          locale={props.languageCode}
          onChange={(date) => handleDateChange(date ? date as Date : undefined)}
          dateFormat={dateLocales.find(loc => loc.code === props.languageCode)?.format}
          placeholderText={getLocaleStringTextByCode(props.compDef.description, props.languageCode)}
          minDate={props.compDef.properties?.min ? new Date((props.compDef.properties?.min as number) * 1000) : undefined}
          maxDate={props.compDef.properties?.max ? new Date((props.compDef.properties?.max as number) * 1000) : undefined}
          onCalendarOpen={() => wrapperRef.current?.focus()}
          autoComplete="off"
          disabled={props.compDef.disabled !== undefined || props.disabled === true}
          popperPlacement="top"
          disabledKeyboardNavigation
          calendarContainer={DatepickerContainer}
          renderCustomHeader={DatepickerHeader}
        />
        <span className="m-1 d-none d-sm-inline material-icons">date_range</span>
      </div>
      break;
  }

  return (
    <div className="d-flex align-items-center">
      {props.compDef.content ?
        <label className="me-1">
          {getLocaleStringTextByCode(props.compDef.content, props.languageCode)}
        </label>
        : null}
      {datepicker}
    </div >
  );
};

export default DateInput;
