export default {
  form_schema: {
    formTitle: 'Share a sample ballot with this voter',
    submitButtonText: 'Completed!',
    fields: [
      {
        widget: 'markdown',
        content:
          'A sample ballot lets voters know exactly who is on their ballot in the election, and helps them feel engaged with the process. We will send you information on directing your voter to their own sample ballot. When you’ve done this, let us know how you contacted them and mark the task complete!',
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
  description: 'Share a sample ballot with this voter',
};
