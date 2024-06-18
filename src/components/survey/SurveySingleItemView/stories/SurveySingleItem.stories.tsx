import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';
import { CommonResponseComponentProps } from "../utils";

export default {
  title: "Survey Item Types/Item Properties"
};

const invalidWarning = "Please check your response";
const itemContainerClass = "my-3";

export const Example = () =>
  <div>
    <div className={itemContainerClass}>
      <SurveySingleItemView
        renderItem={{
          key: 'test.q1',

          components: {
            key: 'root',
            role: 'root',
            items: [
              { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Show item keys' }] },
              {
                key: 'rg', role: 'responseGroup', items: [
                  {
                    key: 'scg', role: 'singleChoiceGroup',
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                    ]
                  }
                ]
              }
            ]
          },
        }}
        responsePrefill={undefined}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={true}
      />
    </div>

    <div className={itemContainerClass}>
      <SurveySingleItemView
        renderItem={{
          key: 'test.q1sticky1',

          components: {
            key: 'root',
            role: 'root',
            items: [
              { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'With sticky header 1' }], style: [{ key: "className", value: "sticky-top" }], },
              {
                key: 'rg', role: 'responseGroup', items: [
                  {
                    key: 'scg', role: 'singleChoiceGroup',
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                    ]
                  }
                ]
              }
            ]
          },
        }}
        responsePrefill={undefined}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={false}
      />
    </div>

    <div className={itemContainerClass}>
      <SurveySingleItemView
        renderItem={{
          key: 'test.q1sticky2',

          components: {
            key: 'root',
            role: 'root',
            items: [
              {
                key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'With sticky header 2, that contains a long description, to see how does it look, when title spreads over multiple lines and eventually takes up a big portion of the screen. Should this be really sticky? Can you read the content below on mobile?' }],
                style: [{ key: "className", value: "sticky-top" }],
              },
              {
                key: 'rg', role: 'responseGroup', items: [
                  {
                    key: 'scg', role: 'singleChoiceGroup',
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                    ]
                  }
                ]
              }
            ]
          },
        }}
        responsePrefill={undefined}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={false}
      />
    </div>

    <div className={itemContainerClass}>
      <SurveySingleItemView
        renderItem={{
          key: 'test.q2',

          components: {
            key: 'root',
            role: 'root',
            items: [
              {
                key: 't', role: 'title',
                content: [{ code: 'en', resolvedText: "Question title's content attribute" }],
                description: [{ code: 'en', resolvedText: "Question title's description attribute as fallback" }]
              },
              {
                key: 'rg', role: 'responseGroup', items: [
                  {
                    key: 'scg', role: 'singleChoiceGroup',
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                      { key: '3', role: 'input', content: [{ code: 'en', resolvedText: 'Option 2 here' }] },
                      { key: 't1', role: 'dateInput', content: [{ code: 'en', resolvedText: 'Subtitle' }] },
                    ]
                  }
                ]
              }
            ]
          },
        }}
        responsePrefill={undefined}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={false}
      />
    </div>


    <div className={itemContainerClass}>
      <SurveySingleItemView
        renderItem={{
          key: 'test.q2multipart title',

          components: {
            key: 'root',
            role: 'root',
            items: [
              {
                key: 't', role: 'title',
                items: [
                  { key: "1", role: "text", content: [{ code: 'en', resolvedText: "This questions displays, how you can define different " }], style: [{ key: "className", value: "fw-normal" }] },
                  { key: "2", role: "text", content: [{ code: 'en', resolvedText: "styles to highlight" }], style: [{ key: "className", value: "text-decoration-underline" }] },
                  { key: "3", role: "text", content: [{ code: 'en', resolvedText: " important words" }], style: [{ key: "className", value: "text-primary" }] },
                ],
              },
              {
                key: 'rg', role: 'responseGroup', items: [
                  {
                    key: 'scg', role: 'singleChoiceGroup',
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                      { key: '3', role: 'input', content: [{ code: 'en', resolvedText: 'Option 2 here' }] },
                      { key: 't1', role: 'dateInput', content: [{ code: 'en', resolvedText: 'Subtitle' }] },
                    ]
                  }
                ]
              }
            ]
          },
        }}
        responsePrefill={undefined}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={false}
      />
    </div>

    <div className={itemContainerClass}>
      <SurveySingleItemView
        renderItem={{
          key: 'test.q2withhelp',

          components: {
            key: 'root',
            role: 'root',
            items: [
              {
                key: 't', role: 'title',
                content: [{ code: 'en', resolvedText: "With help group -> " }],
                description: [{ code: 'en', resolvedText: "Question title's description attribute" }]
              },
              {
                key: 'st', role: 'subtitle',
                content: [{ code: 'en', resolvedText: "Question subtitle's content" }],
              },
              {
                key: 'h', role: 'helpGroup',
                items: [
                  { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Some text' }] },
                ]
              },
              {
                key: 'rg', role: 'responseGroup', items: [
                  {
                    key: 'scg', role: 'singleChoiceGroup',
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                      { key: '3', role: 'input', content: [{ code: 'en', resolvedText: 'Option 2 here' }] },
                      { key: 't1', role: 'dateInput', content: [{ code: 'en', resolvedText: 'Subtitle' }] },
                    ]
                  }
                ]
              }
            ]
          },
        }}
        responsePrefill={undefined}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={false}
      />


    </div>


    <div className={itemContainerClass}>
      <SurveySingleItemView
        customResponseComponents={[
          {
            name: 'custom',
            component: (props: CommonResponseComponentProps) => {
              return <div>
                <p>Custom response component is used here</p>
                <button className="btn btn-primary" onClick={() => props.responseChanged({
                  key: 'custom',
                  value: 'customValue'
                })}>Set response</button>
              </div>
            }
          }
        ]}
        renderItem={{
          key: 'test.q2withhelp',

          components: {
            key: 'root',
            role: 'root',
            items: [
              {
                key: 't', role: 'title',
                content: [{ code: 'en', resolvedText: "With custom response component -> " }],
                description: [{ code: 'en', resolvedText: "Question title's description attribute" }]
              },
              {
                key: 'h', role: 'helpGroup',
                items: [
                  { key: '1', role: 'text', content: [{ code: 'en', resolvedText: 'Some text' }] },
                ]
              },
              {
                key: 'rg', role: 'responseGroup', items: [
                  {
                    key: 'scg', role: 'custom',
                    items: [
                      { key: '1', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '1b', role: 'option', content: [{ code: 'en', resolvedText: 'Option 1' }] },
                      { key: '2', role: 'option', content: [{ code: 'en', resolvedText: 'Option 2' }] },
                      { key: '3', role: 'input', content: [{ code: 'en', resolvedText: 'Option 2 here' }] },
                      { key: 't1', role: 'dateInput', content: [{ code: 'en', resolvedText: 'Subtitle' }] },
                    ]
                  }
                ]
              }
            ]
          },
        }}
        responsePrefill={undefined}
        responseChanged={(response) => console.log(response)}
        showInvalid={false}
        languageCode="en"
        invalidWarning={invalidWarning}
        showKeys={false}
      />


    </div>
  </div>

