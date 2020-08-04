export const stepOneInputs = [
  {
    id: 'first_name',
    label: 'first name',
    type: 'text',
    size: 'small',
    required: true
  },
  {
    id: 'last_name',
    label: 'last name',
    type: 'text',
    size: 'small',
    required: true
  },
  {
    id: 'email',
    label: 'email',
    type: 'email',
    size: 'medium',
    includeCheckbox: true,
    required: true
  },
  {
    id: 'mobile',
    label: 'mobile',
    type: 'text',
    size: 'medium',
    includeCheckbox: true,
    required: true
  }
];
export const stepTwoInputs = [
  {
    id: 'contact_reason',
    label: 'Project Type (e.g. small website for business or large website for multiple users)',
    type: 'text',
    size: 'medium',
    required: true
  },
  {
    id: 'budget',
    label: 'budget (£)',
    type: 'number',
    size: 'small',
    required: true
  },
  {
    id: 'deadline',
    label: 'estimated deadline',
    type: 'date',
    size: 'small',
    required: true
  }
];
export const stepThreeInputs = [
  {
    id: 'no_of_pages',
    label: 'number of web pages (leave blank if unsure)',
    type: 'number',
    size: 'small'
  },
  {
    id: 'db_required',
    label: 'database required?',
    type: 'text',
    size: 'small'
  },
  {
    id: 'domain_purchased',
    label: 'domain purchased / hosting sourced?',
    type: 'text',
    size: 'small'
  },
  {
    id: 'users_required',
    label: 'users / login required?',
    type: 'text',
    size: 'small'
  },
  {
    id: 'additional_info',
    label: 'additional notes / comments',
    type: 'textarea',
    size: 'large'
  }
];
