import * as yup from 'yup';

export const complaintValidationSchema = yup.object().shape({
  complaint_status: yup.string().required(),
  description: yup.string().required(),
  user_id: yup.string().nullable().required(),
  order_id: yup.string().nullable().required(),
});
