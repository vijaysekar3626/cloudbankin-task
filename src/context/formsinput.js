export const formInputs = [
  {
    PageTitle: "borrower company Info",
    fields: [
      {
        fieldId: "1",
        fieldName: "Property Name",
        type: "text",
        customClass:"col_3 with_eye",
        placeholder:'Property Name',
        required: true 
      },
      {
        fieldId: "2",
        fieldName: "Property Type",
        type: "dropdown",
        customClass:"col_3",
        dropoptions:  [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ],
          required: true,
      },
      {
        fieldId: "3",
        fieldName: "Number Of Units",
        type: "dropdown",
        customClass:"col_3 w_full",
        dropoptions: [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
        ],
        required: true,
      },
      {
        fieldId: "4",
        fieldName: "Property Address",
        type: "textarea",
        placeholder:"Enter Borrower address"
      },
      {
        fieldId: "5",
        fieldName: "File Attachment",
        type: "file",
        customClass: "file_upload"
      },
    ],
  },
  {
    PageTitle:"director info",
    fields:[
        {
            fieldId:'6',
            fieldName:'Director Name',
            customClass:'col_5',
            placeholder:'Director Name',
            required: true,
        },
        {
            fieldId: "7",
            fieldName: "Phone Number",
            type: "number",
            customClass:'col_5 w_full',
            placeholder:'Phone Number',
            required: true,
          },
          {
            fieldId: "8",
            fieldName: "Date of Birth",
            type: "date",
            customClass:'col_5',
            placeholder:'Date of Birth',
            required: true,
          },
          {
            fieldId: "9",
            fieldName: "email",
            type: "email",
            customClass:'col_5 w_full',
            required: true,
          },
          {
            fieldId: "10",
            fieldName: "Address",
            type: "textarea",
            required: true,
          },
    ]
  },
  {
    PageTitle:"financial info",
    fields:[
        {
            fieldId:'11',
            fieldName:'Annual Revenue',
            type:'text',
            placeholder:"Enter Annual Revenue",
            customClass:'col_5',
            required: true,
        },
        {
            fieldId: "12",
            fieldName: "Profit Margin (%)",
            type: "text",
            placeholder:'Enter Profit Margin',
            customClass:'col_5 w_full'
          },
          {
            fieldId: "13",
            fieldName: "Total Assets",
            type: "text",
            placeholder:'Enter Total Assets',
            required: true,
          },
          {
            fieldId:'14',
            fieldName:'Total Liabilities',
            type:'text',
            placeholder:'Enter Total Liabilities',
            customClass:'col_5 w_full',
            required: true,
          }
    ]
  },
  {
    PageTitle:'Past Performance Details',
    fields:[
        {
            fieldId:'15',
            fieldName:'Project Name',
            type:'text',
            placeholder:'Enter Project Name',
            customClass:'col_5',
            required: true,
          },
          {
            fieldId:'16',
            fieldName:'Completion date',
            type:'date',
            placeholder:'Enter the completion date',
            customClass:'col_5 w_full',
            required:true
          },
          {
            fieldId:'17',
            fieldName:'Location',
            type:'text',
            placeholder:'Enter Location',
            customClass:'col_5',
            required:true
          },
          {
            fieldId:'18',
            fieldName:'Project Cost',
            type:'text',
            placeholder:'Enter Project Cost',
            customClass:'col_5 w_full',
            required:true
          },
          {
            fieldId:'19',
            fieldName:'Description',
            placeholder:'Provide a brief description of the project',
            type:'textarea'
          }
          
    ]
  },
  {
    PageTitle:'Document Upload',
    fields:[
        {
            fieldId:"20",
            fieldName:'Document Type',
            placeholder:'Select Document Type',
            type: "dropdown",
            dropoptions:[
                { value: "businessLicense", label: "Business License" },
                { value: "financialStatement", label: "Financial Statement" },
                { value: " idProof,", label: " ID Proof" },
            ],
            customClass:'col_5',
            required:true,
        },
        {
            fieldId:'21',
            fieldName:'Additional Notes',
            type:"text",
            placeholder:'Add any comments or instructions',
            customClass:'col_5 w-full',
        },
        {
            fieldId: "22",
            fieldName: "File Attachment",
            type: "file",
            customClass: "file_upload",
            required:true

        }
    ]
  }
];
