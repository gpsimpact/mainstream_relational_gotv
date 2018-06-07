export default {
  form_schema: {
    formTitle: 'Help this voter submit a vote-by-mail application',
    submitButtonText: 'Completed!',
    fields: [
      {
        widget: 'markdown',
        content:
          'Voting early by mail is a proven way to increase voting numbers, and is very convenient. We will send you an email with links and tips for helping your voter fill out and complete an application for a vote-by-mail ballot. When you’ve got them to submit the application, let us know how you contacted them and complete the task!',
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
  description: 'Help this voter submit a vote-by-mail application',
};
