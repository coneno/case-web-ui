import { ItemComponent, LocalizedString, LocalizedObject } from "survey-engine/lib/data_types";


export const getItemComponentTranslationByRole = (components: Array<ItemComponent>, role: string, code: string): string | null => {
  const comp = components.find(comp => comp.role === role);
  if (!comp || comp.displayCondition === false) {
    return null;
  }
  const translation = getLocaleStringTextByCode(comp.content, code);
  if (!translation) {
    console.warn('no translation found for given language code: ' + code);
    return null;
  }
  return translation;
}

export const getLocaleStringTextByCode = (translations: LocalizedObject[] | undefined, code: string): string | undefined => {
  if (!translations) { return; }
  const translation = (translations.find(cont => cont.code === code) as LocalizedString);
  if (!translation) {
    if (translations.length > 0) {
      return (translations[0] as LocalizedString).parts.map(p => p).join('');
    }
    return;
  }
  return translation.parts.map(p => p).join('');
}

export const getItemComponentByRole = (components: Array<ItemComponent> | undefined, role: string): ItemComponent | undefined => {
  if (!components) { return; }
  return components.find(comp => comp.role === role);

}

export const getItemComponentsByRole = (components: Array<ItemComponent>, role: string): ItemComponent[] => {
  return components.filter(comp => comp.role === role);
}

export const getClassName = (styles?: Array<{ key: string, value: string }>): string | undefined => {
  if (!styles) {
    return;
  }
  const className = styles.find(st => st.key === 'className');
  if (!className) {
    return;
  }
  return className.value;
}

export const getLabelPlacementStyle = (styles?: Array<{ key: string, value: string }>): string | undefined => {
  if (!styles) {
    return;
  }
  const className = styles.find(st => st.key === 'labelPlacement');
  if (!className) {
    return;
  }
  return className.value;
}
