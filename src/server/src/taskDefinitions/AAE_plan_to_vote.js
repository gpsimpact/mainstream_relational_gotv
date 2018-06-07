export default {
  form_schema: {
    formTitle: 'Make sure this voter has a plan to vote',
    submitButtonText: 'Completed!',
    fields: [
      {
        widget: 'markdown',
        content:
          'If this voter has not yet voted, it helps if they can make a plan to vote on election day. If they know they will vote before work, or after work, or with a particular friend, it increase their likelihood of voting. When you’ve reached out to them, let us know how you contacted them and mark the task complete!',
      },
      {
        id: 'how_contact_voter',
        widget: 'select',
        validationType: 'string',
        label: 'How did you contact this voter?',
        options: [
          { value: '', label: 'select one' },
          { value: 'email', label: 'Email' },
          { value: 'text', label: 'Text' },
          { value: 'phone', label: 'Phone' },
          { value: 'inperson', label: 'In person' },
          { value: 'other', label: 'Other' },
        ],
        initialValue: '',
        validationTests: [
          {
            method: 'required',
            message: 'A choice is required',
          },
          {
            method: 'min',
            value: 2,
            message: 'A choice is required',
          },
        ],
      },
    ],
  },
  point_value: 1,
  status: 'INCOMPLETE',
  description: 'Make sure this voter has a plan to vote',
};
