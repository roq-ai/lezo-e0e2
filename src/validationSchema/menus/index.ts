import * as yup from 'yup';

export const menuValidationSchema = yup.object().shape({
  item_name: yup.string().required(),
  price: yup.number().integer().required(),
  availability: yup.boolean().required(),
  description: yup.string().nullable(),
  organization_id: yup.string().nullable().required(),
});
