import * as yup from 'yup';

export const deliveryValidationSchema = yup.object().shape({
  delivery_status: yup.string().required(),
  current_location: yup.string().required(),
  destination: yup.string().required(),
  user_id: yup.string().nullable().required(),
  order_id: yup.string().nullable().required(),
});
