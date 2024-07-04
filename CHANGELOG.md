# Changelog

## 1.15.0 - 2024-07-04

### Changed

- Survey items can use separate subtitle component
- Matrix question improvements for accessibility and styling
- Can hide signup button on `LoginCard` component

## 1.14.7 - 2023-06-26

### Changed

- Fix issue in `MultipleChoiceGroup" "subResponseCache" issues and correctly setting the response if checkbox is selected again. Also appending corresponding "dtype" to the response in case number input or time input is used.

## 1.14.6 - 2023-06-19

### Changed

- Fix issue in `SingleChoiceGroup` where the "subResponseCache" was not properly updated when the "sub-response" was deleted.

## 1.14.5 - 2023-04-14

### Changed

- Updated dependencies
- helpGroup is now using the Popover component from react-bootstrap (popper not needed to render the component anymore)

## 1.14.4 - 2023-04-12

### Changed

- Updated dependencies
- Add missing `children` prop to `<Checkbox>` component

## 1.14.3 - 2023-02-23

### Changed

- [PR#8](https://github.com/coneno/case-web-ui/pull/8): Add surveyEngine in the onResponseChanged callback

## 1.14.2 - 2022-12-08

### Changed

- Fixing an issue where toggling responses between answered and unanswered state quicker than the cool down delay resulted different state than expected (init items with empty array instead of setting the response with undefined).

## 1.14.1 - 2022-11-11

### Changed

- Fixing an issue where the missing "items" attribute of a helpGroup survey component would cause the survey to crash.

## 1.14.0 - 2022-10-21

### BREAKING CHANGES

- We updated the survey data model to accomodate changes related to the improved survey history handling.

### Changed

- Updated dependencies

## 1.13.2 - 2022-10-05

### Changed

- Fix response update in `responsiveMatrix`.

## 1.13.1 - 2022-10-02

### Changed

- In `ResponsiveMatrix` use role to find dropdown options

## 1.13.0 - 2022-09-30

### Added

- New question type `ResponsiveMatrix`, currently supporting dropdown as an input.

### Changed

- Updated dependencies: recharts, react-dropzone, react-simple-maps
  - file dropzones had breaking change about how the accept property is defined: see here <https://github.com/react-dropzone/react-dropzone/releases/tag/v13.0.0>

## 1.12.0 - 2022-09-08

### Changed

- TextInput survey response component:
  - auto-removes leading and trailing whitespaces in the stored response (but does not modifies the user input to allow simpler typing)
  - through a new style attribute, the component can define a transformation such as convert to upper case or convert to lower case. ({ key: 'transformCase', value: 'upper' | 'lower'})

## 1.11.2 - 2022-08-19

### Changed

- Export survey utils functions & components

## 1.11.1 - 2022-07-22

### Changed

- TeaserImage component supports copyright placement

## 1.11.0 - 2022-07-08

### Changed

- TextLink will use target '_self', when internal link is used.
- Update some dependency versions.

## 1.10.4 - 2022-04-14

### Changed

- Bugfix for survey's number input to handle min/max values with 0.
- Update survey-engine version.

## 1.10.3 - 2022-03-15

### Changed

- Improve nav-link style for accessibility
- Improve behaviour of number input in the survey regarding min/max validation. Previously, input with valid but partial values were moved to the min/max value while the user was typing, resulting in a confusing behaviour. Now, the input accepts the user typed input, but sets the response, only if the value is valid otherwise unsets the response.
- LoadingPlaceholder's h-100 class removed. Instead, you can control height as an optional attribute.
- Slider input reacts to first click if the slider is not moved as well to provide a more intuitive use.

## 1.10.2 - 2022-03-08

### Changed

- MapChart hides tab navigation if only one map is available.

## 1.10.1 - 2022-03-07

### Changed

- Improve survey end buttons white space

## 1.10.0 - 2022-03-04

### Changed

- Text and number inputs in the survey remove the response if the input's value is deleted (empty). This is to fix the expected behaviour and avoid users to be able to work around survey validation by entering and afterwards removing their entry.
- Adding a workaround to apply scrolling in firefox when switching survey pages.
- Improve responsive single choice array behavior on some devices, where it sometimes lead to disappearing answers or unintended scrolling.

## 1.9.10 - 2022-03-03

### Changed

- Cloze question's input's text can be aligned start, center, end.

## 1.9.9 - 2022-02-28

### Changed

- Improved scrolling behaviour of numeric input in surveys. Also open the numeric keyboard on mobile.

## 1.9.8 - 2022-02-26

### Changed

- Datepicker header includes year and month dropdown to simplify selection.

## 1.9.7 - 2022-02-26

### Changed

- Added `classNameOverride` option to footer column props, e.g., to be able to use different column width.

## 1.9.6 - 2022-02-22

### Changed

- date input inside a single choice should not automatically open date picker when prefill is used

## 1.9.5 - 2022-02-14

### Changed

- fix cloze question's response cache handling (how to prefill existing values)

## 1.9.4 - 2022-02-14

### Changed

- dropdown group's `description` attribute will be used for the placeholder item of the dropdown.
- survey's number inputs by default has no value (empty string), this would help to indicate that a value needs to be set

## 1.9.3 - 2022-02-11

- Fix further input name issue in responsive single choice array and bipolar likert causing issues between multiple questions.

## 1.9.2 - 2022-02-11

- Fix input name issue in responsive single choice array and bipolar likert.

## 1.9.1 - 2022-02-11

### Changed

- Fixing issue with response single choice and bipolar likert choice where keyboard navigation was not working as expected in table mode.
- Center text and number inputs content when used in a cloze question.
- TextLink should work as normal <a> tag.
- Updated project dependencies.

## 1.9.0 - 2022-02-04

### Added

- New input for "time", to ask for a specific hour and minute of the day. When stepsize is set, seconds can be asked as well.
- Added new response component with the role `timeInput` to select a time. Result will be interpreted as seconds since 00:00:00. Can also be used in cloze questions, single choice or multiple choice questions.
- New question type `consent` to display a consent dialog and store the response in a survey.

### Changes

- Formatted text components in the survey can include date object to display a localized date. (With `role: dateDisplay`).
- Use webpack5 in storybook.
- Survey view accepts flag to turn on debug messages for survey engine.

## 1.8.7 - 2022-01-26

Action card images' copyright notice can be aligned right.

## 1.8.5 - 2022-01-26

Action card images can contain copyright notice.

## 1.8.4 - 2022-01-24

Color and font-size optimisations for accessibility.

## 1.8.3 - 2022-01-22

### Changed

- Fix optional survey list's top spacing and border behaviour

## 1.8.2 - 2022-01-22

### Changed

- Survey list header contains one top border, and this can be hidden. This change is to make the page less cluttered for use cases when report list or other article based content is displayed.

## 1.8.1 - 2022-01-21

- Run locale registration for react-datepicker, when a component is initialized.

## 1.8.0 - 2022-01-21

### BREAKING-CHANGES

- Survey View needs to receive date-fns locales as a prop. These locales needs to be registered outside of the library, from the host app.

## 1.7.0 - 2022-01-21

### Added

- New component called `ActionCard` - a configurable card with hover effect, clickable, can include image on top or on the left. Image is attached as background image to a div, with configurable width, height (also min/max) and and background position and size. Optionally the image can be included as a normal `img` - by using the prop `as`.
- Survey renderer accepts an array of custom defined response components: `customResponseComponents: Array<CustomSurveyResponseComponent>;`. These can be used to extend the survey question types.
- New components for report history / report card / report detail dialog.

### Changed

- Accordion list component accepts itemKey property, and uses this to generate item keys. By setting the `itemKey`, more than one accordion list on the page can be used.
- Add shadow to modal (dialog) border.
- Cloze question can include line breaks with role `lineBreak`.
- Updated project dependencies. From this, important is especially the survey `survey-engine`.
- Dialog prop "onClose" is optional. If no onClose is provided, the closing icon is hidden.
- Responsive Single Choice array and Bipolar likert scale array rows support displayCondition.
- SurveyCard can handle 'immediate' category.

## 1.6.2 - 2021-11-22

Fix issue with dialog header rendering on windows.

## 1.6.1 - 2021-11-19

Updated project dependencies.

## 1.6.0 - 2021-11-19

### BREAKING-CHANGES

- Replacing  material-ui dialog, with react bootstrap's modal. Dialog component support now following props:
  - size (optional): 'sm', 'lg', 'xl'
  - fullScreenFrom (optional): 'sm-down', 'md-down', 'lg-down', xl-down', 'xxl-down'. If not defined, 'sm-down' will be used as a default value.

### Added

- New survey response item type for "cloze" question, a question where inputs embedded in a text can be placed. E.g., On .... between ... and ... . This can be embedded inside a single or multiple choice question as well. To invoke such an item, you can use the `role: 'cloze'`.
- New component available for file inputs using a dropzone.

### Changed

- Survey navigation buttons should loose focus after clicked. Also submit button should not gain autofocus now.
- Small improvements on TextInput and NumberInput styling.
- DateInput n survey also accepts className for the component.
- NavLink example removes `type="button"` that causes wrong style in Safari.
- TextInput and MultiLineTextInput survey components now support `maxLength` attribute passed down through the style array, to control how many characters can be entered.

## 1.5.3 - 2021-08-30

### Changed

- Fixed issue for map-time-series visualisation to be able include values with zero.
- Add css class `fs-survey-item-title` to survey items and set default size to 1.125rem.

## 1.5.2 - 2021-08-21

### Changed

- Survey Page buttons on last page, put focus on Submit instead of back button. This a temporary solution, since ideally focus should be set to the top survey item.

## 1.5.1 - 2021-08-19

### Changed

- Improve survey page progress indicator, to better handle cases with many survey pages.
- Improve click target for likert scales item, especially relevant for vertical mode.

## 1.5.0 - 2021-08-17

### Added

- New survey response component for role `responsiveBipolarLikertScaleArray`.

### Changed

- Updating project dependencies (react-markdown, recharts, react-datepicker)

## 1.4.2 - 2021-07-30

### Changed

- `responsiveSingleChoiceArray`: fix isLast for horizontal mode
- `likert` survey response item fixes issues with longer text when stacked in vertical mode.

## 1.4.1 - 2021-07-30

### Changed

- `SingleChoiceGroup` and `MultipleChoiceGroup`: use flex grow label also in case of formatted text.
- `responsiveSingleChoiceArray`: small improvements on props.

## 1.4.0 - 2021-07-29

### Added

- New survey question type: `ResponsiveSingleChoiceArray`. When using this component, you can define different view modes for different screen sizes. Currently supported are: 'vertical', 'horizontal' and 'table' modes. This question type can be used, e.g., to implement Likert Scale matrices.

### Changed

- `SingleChoiceGroup`: Options of a single choice group can be styled (with className attribute). In such a case, styling is not propagated down to the nested inputs, to avoid issues with improperly applied styles twice.
- `SingleChoiceGroup` and `MultipleChoiceGroup` accept now option items with multiple parts (items in the component's items array). Currently, only text-based components are supported, for the purpose if different parts of the text needs to be styled differently (e.g., bold, color highlight or underlined).
- Title component of a single survey item now supports className style attribute to attach CSS class to the whole title area. This can be used, e.g., to add "sticky-top", to make the question title stick to the top of the screen as long as the question is visible.
- Title component of a single survey item accepts now a list of items through its `items` attribute. This can be used to define a `content` with differently styled parts (e.g., to highlight specific words, or override default font weight from bold to normal).

## [1.3.0] - 2021-07-08

### Changed

- `SurveySingleItemView`: Apply same style to debug key as title even if there is no title component.
- Add Italian date locale for datepickers.
- Updating dependencies: material-ui, react-date-picker

## [1.2.2 (1)] - 2021-05-28

Needed to downgrade rollup and plugin versions. When creating the bundle and deploying, react-markdown was not working anymore.

## [1.2.0] - 2021-05-28

### Changed

- Updated react-markdown version to 6.0.0
- Dialog header fixed always
- `SurveySingleItemView` and `SurveyPageView` are now exported, so that they can be used, e.g., by the editor.
- Add a new callback to SurveyView: `onResponsesChanged`. Optional method that will be called every time the responses changed.
- Option to display item and response option keys in surveys, to be used by the editor when testing. Option keys are currently only available for single and multiple choice questions.

### BREAKING-CHANGES

Due to the updates related to react-markdown version, the following markdown custom syntax need to be changed.

**Map Chart**

Previously:

~~~
[mapchart:/charts/ggd-map-nl.json]:  /charts/20210126_0801_kaart_data.json
~~~

New syntax:

~~~
<mapchart
  map-url="/charts/ggd-map-nl.json"
  data-url="/charts/20210126_0801_kaart_data.json"
/>
~~~

**Line and Scatter Chart**

Previously:

~~~
[line-and-scatter-chart]: /charts/20210126_0801_percentage_klachten_over_tijd.json
~~~

New syntax:

~~~
<lineandscatterchart
  data-url="/charts/20210126_0801_percentage_klachten_over_tijd.json"
/>
~~~

**Page info for date line**

Previously:

~~~
`Deze pagina is voor het laatst aangepast op 02.feb.2021 16:00.`
~~~

New syntax:

~~~
<pageinfo>
Deze pagina is voor het laatst aangepast op 02.feb.2021 16:00.
</pageinfo>
~~~

The old syntax will be rendered as the default code block.

## [1.1.18]

### Added

- `VideoPlayer` accepts `tracks` array (optional property), to define caption/subtitles.
- New storybook example for `VideoPlayer`

### Changed

- Likert scale survey component supports the option to put label before radio buttons
- Updating dependencies, especially bootstrap to stable version

## [1.1.17]

### Added

- New stories for single choice survey component.

### Changed

- Internal changes how color is handled by LoadingPlacelholder
- Updating project dependencies

## [1.1.16]

### Added

- New stories for single choice survey component.

### Changed

- `SingleChoiceGroup` and `MultipleChoiceGroup` survey components display error message if there are no items (instead of crashing).

## [1.1.15]

### Added

- New stories to locally test and preview components.

### Changed

- `LoadingPlaceholder` widget supports "white" background color.
- `LoadingPlaceholder` widget allows configuring width of the spinner's line.
- Updated project dependencies

## [1.1.14]

### Changed

- Add `controlList='nodownload'` option to VideoPlayer to prevent download option appearing in video menu. (Videos are typically not meant for downloading locally.)
- Survey's numeric slider component is using the "description" attribute, as a placeholder when no answer is selected yet.
- NumberInput component accepts new style attribute (e.g., `{ key: 'inputMaxWidth': '80px'}`) to control max width of the input field. Ignored if smaller than min width (50px). If not defined, component won't have max width, thus will try to fill up remaining space.

## [1.1.13]

### Added

- Multiple choice question can include numeric input fields as well. For this, inside the options array, add an item with `role: 'numberInput'`. Component properties like min, max, step can be applied.

### Changed

- Change styling of Text and Number input components. Label part should only expand as far as its content requires. Number input has max width currently.

## [1.1.12]

### Added

- Markdown component for survey questions: Inside a survey item, new component type with `role: 'markdown'` is available. This can be used either directly inside the route (e.g., as a top or bottom component below the response group) or inside a response group.
- Stories for more survey components: TextDisplay/Markdowns and Multiple choice group.

### Changed

- Multiple Choice survey component can render formatted text component between the options. For this, use the `role: 'text'` for the component inside the multiple choice group. Formatting is applied through the `style` list's "className" entry.
