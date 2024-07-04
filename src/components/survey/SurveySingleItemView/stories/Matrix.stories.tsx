import React from "react";
import SurveySingleItemView from "../SurveySingleItemView";

import 'localStyles';

export default {
  title: "Survey Item Types/Matrix"
};

const invalidWarning = "Please check your response";

export const ExampleDSQMatrix = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Matrix' }] },
        {
          key: 'rg', role: 'responseGroup', items: [
            {
              "key": "mat",
              "role": "matrix",
              "items": [
                {
                  "role": "headerRow",
                  "items": [
                    {
                      "key": "0",
                      "role": "text",
                      "content": [
                        {
                          "code": "nl",
                          resolvedText: "Frequentie"
                        }
                      ]
                    },
                    {
                      "key": "1",
                      "role": "text",
                      "content": [
                        {
                          "code": "nl",
                          resolvedText: "Ernst"
                        }
                      ]
                    }
                  ],
                  "order": {
                    "name": "sequential"
                  }
                },
                {
                  "key": "DSQ_13",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "freq",
                      "role": "dropDownGroup",
                      "items": [
                        {
                          "key": "0",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Nooit"
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Soms"
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Ongeveer de helft van de tijd"
                            }
                          ]
                        },
                        {
                          "key": "3",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Meestal"
                            }
                          ]
                        },
                        {
                          "key": "4",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Altijd"
                            }
                          ]
                        }
                      ],
                      "order": {
                        "name": "sequential"
                      },
                      "description": [
                        {
                          "code": "nl",
                          resolvedText: "Kies één van de opties",
                        }
                      ]
                    },
                    {
                      "key": "sev",
                      "role": "dropDownGroup",
                      "disabled": {
                        "name": "not",
                        "data": [
                          {
                            "dtype": "exp",
                            "exp": {
                              "name": "responseHasKeysAny",
                              "data": [
                                {
                                  "str": "T0_3.DSQ.01"
                                },
                                {
                                  "str": "rg.mat.DSQ_13.freq"
                                },
                                {
                                  "str": "1"
                                },
                                {
                                  "str": "2"
                                },
                                {
                                  "str": "3"
                                },
                                {
                                  "str": "4"
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "items": [
                        {
                          "key": "0",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Mild",
                              "parts": [
                                {
                                  "str": "Mild"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Matig",
                              "parts": [
                                {
                                  "str": "Matig"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Ernstig",
                              "parts": [
                                {
                                  "str": "Ernstig"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "3",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Zeer ernstig",
                              "parts": [
                                {
                                  "str": "Zeer ernstig"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "order": {
                        "name": "sequential"
                      },
                      "description": [
                        {
                          "code": "nl",
                          resolvedText: "Kies één van de opties",
                          "parts": [
                            {
                              "str": "Kies één van de opties"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "order": {
                    "name": "sequential"
                  },
                  "content": [
                    {
                      "code": "nl",
                      resolvedText: "Vermoeidheid/extreme uitputting",
                      "parts": [
                        {
                          "str": "Vermoeidheid/extreme uitputting"
                        }
                      ]
                    }
                  ]
                },
                {
                  "key": "DSQ_14",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "freq",
                      "role": "dropDownGroup",
                      "items": [
                        {
                          "key": "0",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Nooit",
                              "parts": [
                                {
                                  "str": "Nooit"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Soms",
                              "parts": [
                                {
                                  "str": "Soms"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Ongeveer de helft van de tijd",
                              "parts": [
                                {
                                  "str": "Ongeveer de helft van de tijd"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "3",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Meestal",
                              "parts": [
                                {
                                  "str": "Meestal"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "4",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Altijd",
                              "parts": [
                                {
                                  "str": "Altijd"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "order": {
                        "name": "sequential"
                      },
                      "description": [
                        {
                          "code": "nl",
                          resolvedText: "Kies één van de opties",
                          "parts": [
                            {
                              "str": "Kies één van de opties"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "key": "sev",
                      "role": "dropDownGroup",
                      "disabled": {
                        "name": "not",
                        "data": [
                          {
                            "dtype": "exp",
                            "exp": {
                              "name": "responseHasKeysAny",
                              "data": [
                                {
                                  "str": "T0_3.DSQ.01"
                                },
                                {
                                  "str": "rg.mat.DSQ_14.freq"
                                },
                                {
                                  "str": "1"
                                },
                                {
                                  "str": "2"
                                },
                                {
                                  "str": "3"
                                },
                                {
                                  "str": "4"
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "items": [
                        {
                          "key": "0",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              "resolvedText": "Mild",
                              "parts": [
                                {
                                  "str": "Mild"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Matig",
                              "parts": [
                                {
                                  "str": "Matig"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Ernstig",
                              "parts": [
                                {
                                  "str": "Ernstig"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "3",
                          "role": "text",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "Zeer ernstig",
                              "parts": [
                                {
                                  "str": "Zeer ernstig"
                                }
                              ]
                            }
                          ]
                        }
                      ],
                      "order": {
                        "name": "sequential"
                      },
                      "description": [
                        {
                          "code": "nl",
                          resolvedText: "Kies één van de opties",
                          "parts": [
                            {
                              "str": "Kies één van de opties"
                            }
                          ]
                        }
                      ]
                    }
                  ],
                  "order": {
                    "name": "sequential"
                  },
                  "content": [
                    {
                      "code": "nl",
                      resolvedText: "Een doof, zwaar gevoel na het beginnen met een inspanning  ",
                      "parts": [
                        {
                          "str": "Een doof, zwaar gevoel na het beginnen met een inspanning  "
                        }
                      ]
                    }
                  ]
                },
              ]
            }
          ],
        },
      ],
    },
  }}
  responsePrefill={undefined}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="nl"
  invalidWarning={invalidWarning}
/>;


export const ExampleAgeGroupsMatrix = () => <SurveySingleItemView
  renderItem={{
    key: 'test.q1',
    components: {
      key: 'root',
      role: 'root',
      items: [
        { key: 't', role: 'title', content: [{ code: 'en', resolvedText: 'Matrix' }] },
        {
          "key": "rg",
          "role": "responseGroup",
          "items": [
            {
              "key": "mat",
              "role": "matrix",
              "items": [
                {
                  "key": "1",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "l",
                      "role": "label",
                      "content": [
                        {
                          "code": "nl",
                          resolvedText: "0 - 4 jaar",
                          "parts": [
                            {
                              "str": "0 - 4 jaar"
                            }
                          ]
                        },
                      ],
                      "properties": {}
                    },
                    {
                      "key": "col2",
                      "role": "dropDownGroup",
                      "properties": {},
                      "items": [
                        {
                          "key": "0",
                          "role": "option",
                          "content": [
                            {
                              "code": "en",
                              resolvedText: "0",
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "1",
                              "parts": [
                                {
                                  "str": "1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "2",
                              "parts": [
                                {
                                  "str": "2"
                                }
                              ]
                            },

                          ]
                        },
                        {
                          "key": "3",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "3",
                              "parts": [
                                {
                                  "str": "3"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "4",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "4",
                              "parts": [
                                {
                                  "str": "4"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "5",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "5",
                              "parts": [
                                {
                                  "str": "5"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "6",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "6",
                              "parts": [
                                {
                                  "str": "6"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "7",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "7",
                              "parts": [
                                {
                                  "str": "7"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "8",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "8",
                            }
                          ]
                        },
                        {
                          "key": "9",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "> 8",
                            }

                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "key": "6",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "l",
                      "role": "label",
                      "content": [
                        {
                          "code": "nl",
                          resolvedText: "5 - 12 jaar",
                          "parts": [
                            {
                              "str": "5 - 12 jaar"
                            }
                          ]
                        },
                      ],
                      "properties": {}
                    },
                    {
                      "key": "col2",
                      "role": "dropDownGroup",
                      "properties": {},
                      "items": [
                        {
                          "key": "0",
                          "role": "option",
                          "content": [
                            {
                              "code": "en",
                              resolvedText: "0",
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "1",
                              "parts": [
                                {
                                  "str": "1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "2",
                              "parts": [
                                {
                                  "str": "2"
                                }
                              ]
                            },

                          ]
                        },
                        {
                          "key": "3",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "3",
                              "parts": [
                                {
                                  "str": "3"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "4",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "4",
                              "parts": [
                                {
                                  "str": "4"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "5",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "5",
                              "parts": [
                                {
                                  "str": "5"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "6",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "6",
                              "parts": [
                                {
                                  "str": "6"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "7",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "7",
                              "parts": [
                                {
                                  "str": "7"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "8",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "8",
                            }
                          ]
                        },
                        {
                          "key": "9",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "> 8",
                            }

                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "key": "7",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "l",
                      "role": "label",
                      "content": [
                        {
                          "code": "nl",
                          resolvedText: "13 - 18 jaar",
                          "parts": [
                            {
                              "str": "13 - 18 jaar"
                            }
                          ]
                        },
                      ],
                      "properties": {}
                    },
                    {
                      "key": "col2",
                      "role": "dropDownGroup",
                      "properties": {},
                      "items": [
                        {
                          "key": "0",
                          "role": "option",
                          "content": [
                            {
                              "code": "en",
                              resolvedText: "0",
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "1",
                              "parts": [
                                {
                                  "str": "1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "2",
                              "parts": [
                                {
                                  "str": "2"
                                }
                              ]
                            },

                          ]
                        },
                        {
                          "key": "3",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "3",
                              "parts": [
                                {
                                  "str": "3"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "4",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "4",
                              "parts": [
                                {
                                  "str": "4"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "5",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "5",
                              "parts": [
                                {
                                  "str": "5"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "6",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "6",
                              "parts": [
                                {
                                  "str": "6"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "7",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "7",
                              "parts": [
                                {
                                  "str": "7"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "8",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "8",
                            }
                          ]
                        },
                        {
                          "key": "9",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "> 8",
                            }

                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "key": "3",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "l",
                      "role": "label",
                      "content": [
                        {
                          "code": "nl",
                          resolvedText: "19 - 44 jaar",
                          "parts": [
                            {
                              "str": "19 - 44 jaar"
                            }
                          ]
                        },
                      ],
                      "properties": {}
                    },
                    {
                      "key": "col2",
                      "role": "dropDownGroup",
                      "properties": {},
                      "items": [
                        {
                          "key": "0",
                          "role": "option",
                          "content": [
                            {
                              "code": "en",
                              resolvedText: "0",
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "1",
                              "parts": [
                                {
                                  "str": "1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "2",
                              "parts": [
                                {
                                  "str": "2"
                                }
                              ]
                            },

                          ]
                        },
                        {
                          "key": "3",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "3",
                              "parts": [
                                {
                                  "str": "3"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "4",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "4",
                              "parts": [
                                {
                                  "str": "4"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "5",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "5",
                              "parts": [
                                {
                                  "str": "5"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "6",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "6",
                              "parts": [
                                {
                                  "str": "6"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "7",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "7",
                              "parts": [
                                {
                                  "str": "7"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "8",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "8",
                            }
                          ]
                        },
                        {
                          "key": "9",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "> 8",
                            }

                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "key": "4",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "l",
                      "role": "label",
                      "content": [

                        {
                          "code": "nl",
                          resolvedText: "45 - 64 jaar",
                          "parts": [
                            {
                              "str": "45 - 64 jaar"
                            }
                          ]
                        }
                      ],
                      "properties": {}
                    },
                    {
                      "key": "col2",
                      "role": "dropDownGroup",
                      "properties": {},
                      "items": [
                        {
                          "key": "0",
                          "role": "option",
                          "content": [
                            {
                              "code": "en",
                              resolvedText: "0",
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "1",
                              "parts": [
                                {
                                  "str": "1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "2",
                              "parts": [
                                {
                                  "str": "2"
                                }
                              ]
                            },

                          ]
                        },
                        {
                          "key": "3",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "3",
                              "parts": [
                                {
                                  "str": "3"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "4",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "4",
                              "parts": [
                                {
                                  "str": "4"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "5",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "5",
                              "parts": [
                                {
                                  "str": "5"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "6",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "6",
                              "parts": [
                                {
                                  "str": "6"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "7",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "7",
                              "parts": [
                                {
                                  "str": "7"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "8",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "8",
                            }
                          ]
                        },
                        {
                          "key": "9",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "> 8",
                            }

                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "key": "5",
                  "role": "responseRow",
                  "items": [
                    {
                      "key": "l",
                      "role": "label",
                      "content": [
                        {
                          "code": "nl",
                          resolvedText: "65+",
                          "parts": [
                            {
                              "str": "65 of ouder"
                            }
                          ]
                        },
                      ],
                      "properties": {}
                    },
                    {
                      "key": "col2",
                      "role": "dropDownGroup",
                      "properties": {},
                      "items": [
                        {
                          "key": "0",
                          "role": "option",
                          "content": [
                            {
                              "code": "en",
                              resolvedText: "0",
                            }
                          ]
                        },
                        {
                          "key": "1",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "1",
                              "parts": [
                                {
                                  "str": "1"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "key": "2",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "2",
                              "parts": [
                                {
                                  "str": "2"
                                }
                              ]
                            },

                          ]
                        },
                        {
                          "key": "3",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "3",
                              "parts": [
                                {
                                  "str": "3"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "4",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "4",
                              "parts": [
                                {
                                  "str": "4"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "5",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "5",
                              "parts": [
                                {
                                  "str": "5"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "6",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "6",
                              "parts": [
                                {
                                  "str": "6"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "7",
                          "role": "option",
                          "content": [

                            {
                              "code": "nl",
                              resolvedText: "7",
                              "parts": [
                                {
                                  "str": "7"
                                }
                              ]
                            },
                          ]
                        },
                        {
                          "key": "8",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "8",
                            }
                          ]
                        },
                        {
                          "key": "9",
                          "role": "option",
                          "content": [
                            {
                              "code": "nl",
                              resolvedText: "> 8",
                            }

                          ]
                        }
                      ]
                    }
                  ]
                }
              ],
              "order": {
                "name": "sequential"
              }
            }
          ]
        }
      ],
    },
  }}
  responsePrefill={undefined}
  responseChanged={(response) => console.log(response)}
  showInvalid={false}
  languageCode="nl"
  invalidWarning={invalidWarning}
/>;
