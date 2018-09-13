export default {
  form_schema: {
    formTitle: 'Forward inspirational stories about why voting is important',
    submitButtonText: 'Completed!',
    fields: [
      {
        widget: 'markdown',
        content:
          'Often, voters don’t think their vote is important. We will send you links to inspirational stories about the importance of voting, and ask you to mention or send them to your voter. When you’ve reached out to them, let us know how you contacted them and mark the task complete!',
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
          { value: 'socialmedia', label: 'Social Media' },
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
  sequence: 3,
  status: 'INCOMPLETE',
  description: 'Forward inspirational stories about why voting is important',
};
