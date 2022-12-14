let elements = [{
    name: "Tryg",
    root: true,
    id: "9c4347f6-7ab9-11ed-a1eb-0242ac120002",
    telephone: "70112020",
    openingHours: [
        {}
    ],
    logo: "",
    childs: [{
        name: "0 - Englesk",
        id: "ab7097f2-4403-4119-b9e0-8bb19b3dff6a",
        rootId: "9c4347f6-7ab9-11ed-a1eb-0242ac120002",
        childs: [{
            id: "90a30ecd-475a-4035-b706-78413125300b",
            rootId: "9c4347f6-7ab9-11ed-a1eb-0242ac120002",
            name: "1 - Ny kunde",
            childs: []
        }, {
            id: "e25fca5c-be89-450f-a53e-02e2a326a6ba",
            rootId: "9c4347f6-7ab9-11ed-a1eb-0242ac120002",
            name: "2 - Sunhed",
            childs: [{
                id: "19843ff9-4a22-472f-a9a1-16071334d0b2",
                rootId: "9c4347f6-7ab9-11ed-a1eb-0242ac120002",
                name: "1 - Gør brug",
                childs: []
            }]
        }]
    }],
  }, {
    name: "Danske bank",
    root: true,
    telephone: "72304050",
    id: "bf6b3182-e919-4114-912f-45d6b6cbe5cd",
    childs: [{
        name: "1 - Pension",
        id: "8393e9ec-613e-46c9-bf69-7a0b370aea73",
        rootId: "bf6b3182-e919-4114-912f-45d6b6cbe5cd",
        childs: [{
            id: "5839a654-18cb-48b3-b6a8-f7e6c965f5c2",
            name: "1 - Førtidspension",
            rootId: "bf6b3182-e919-4114-912f-45d6b6cbe5cd",
            childs: []
        }, {
            id: "5b6cf5a2-b749-495e-af4d-b602cd15553e",
            rootId: "bf6b3182-e919-4114-912f-45d6b6cbe5cd",
            name: "2 - Opsparing",
            childs: [{
                id: "a4aa9749-3bd5-4a56-804b-a9e0f2153560",
                rootId: "bf6b3182-e919-4114-912f-45d6b6cbe5cd",
                name: "1 - Formue",
                childs: []
            }]
        }]
    }]
  }];

  export default elements;


  let ex = {
    id: "9fe8046e-7947-11ed-a1eb-0242ac120002",
    name: "Tryg",
    telephone: "70112020",
    image: "http://something.sk",
    buisnessArea: "insurance",
    childs: [{
      id: 1,
      clickNumer: 0,
      parentId: "9fe8046e-7947-11ed-a1eb-0242ac120002",
      headerText: "English",
      explanatoryText: "If you want to process in english",
      waitDurationBeforeNavigationInSec: 2,
      legalWarningText: undefined,
      input: {
        canTakeInput: true,
        value: ""
      },
      icon: "http://www.lang.dk"
    }]
  };