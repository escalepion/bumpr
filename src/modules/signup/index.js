import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postInformation} from "store/informations/actions";

import BoxWrapper from 'components/boxWrapper';
import MainWrapper from 'layout/mainWrapper';


const phoneRegExp = /^0(\s*)(7)(\s*)(\d(\s*)){9}$/
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(255, 'Too Long!')
    .required('Required'),
  company: Yup.string()
    .min(2, 'Too Short!')
    .max(255, 'Too Long!')
    .required('Required'),
  postcode: Yup.string()
    .min(2, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  mobile_phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Required'),
  email_address: Yup.string().email('Invalid email').required('Required'),
});

const SignupModule = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <MainWrapper>
        <div className='text-universal850 font-bold text-white text-xl'>Join our network</div>
        <div className='text-white my-4'>
          <div>Offer <span className='font-bold'>PayLater</span> to split servicing and repair work into monthly instalments - interest-free.</div>
          <div>Use <span className='font-bold'>PayNow</span> to take secure payments online.</div>
        </div>
        <BoxWrapper>
          <div className='text-xl font-bold text-universal850'>Join our network</div>
          <div className='text-xl text-universal850 mb-6'>Free to join, no monthly fees</div>
          <Formik
            initialValues={{
              name: '',
              company: '',
              email_address: '',
              mobile_phone: '',
              postcode: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              dispatch(postInformation({ ...values, pay_now: 'true', pay_later: 'false', navigate }));
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='mb-8'>
                  <Field className="w-full border boder-active-bg-dark border-active-bg-dark rounded-full px-4 py-4" placeholder="Name" type="text" name="name" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div className='mb-8'>
                  <Field className="w-full border boder-active-bg-dark border-active-bg-dark rounded-full px-4 py-4" placeholder="company" type="text" name="company" />
                  <ErrorMessage name="company" component="div" />
                </div>
                <div className='mb-8'>
                  <Field className="w-full border boder-active-bg-dark border-active-bg-dark rounded-full px-4 py-4" placeholder="Mobile phone" type="text" name="mobile_phone" />
                  <ErrorMessage name="mobile_phone" component="div" />
                </div>
                <div className='mb-8'>
                  <Field className="w-full border boder-active-bg-dark border-active-bg-dark rounded-full px-4 py-4" placeholder="E-mail" type="email" name="email_address" />
                  <ErrorMessage name="email_address" component="div" />
                </div>
                <div className='mb-8'>
                  <Field className="w-full border boder-active-bg-dark border-active-bg-dark rounded-full px-4 py-4" placeholder="Postcode" type="text" name="postcode" />
                  <ErrorMessage name="postcode" component="div" />
                </div>
                <button className='bg-shamrock mt-5 py-3 px-4 border boder-active-bg-dark rounded-full flex items-center justify-center w-full' type="submit" disabled={isSubmitting}>
                  Submit
                  <div className='ml-2.5 pt-0.5'><i class='fa-solid fa-arrow-right'></i></div>
                </button>
              </Form>
            )}
          </Formik>
        </BoxWrapper>
      </MainWrapper>
  );
}

export default SignupModule;
