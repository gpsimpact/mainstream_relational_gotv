export default {
  form_schema: {
    formTitle: 'Tell this voter about the upcoming election',
    submitButtonText: 'Completed!',
    fields: [
      {
        widget: 'markdown',
        content:
          'Contact this voter, and let them know about the upcoming primary election on August 7, and the general on November 6. We will send you an email with things to say and helpful tips for this first contact with your voter. When you’ve been in touch, let us know how you contacted them, and complete the task!',
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
  description: 'Tell this voter about the upcoming election',
};
