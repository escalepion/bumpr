import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { postInformation} from "store/informations/actions";

import BoxWrapper from 'components/boxWrapper';
import Input from 'components/Input';
import MainWrapper from 'layout/mainWrapper';
import BorderButton from 'components/borderButton';


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
  const submittingForm = useSelector(state => state.InformationsReducer)?.submittingForm || false;
  const [payStatuses, setPayStatuses] = useState({ payNow: false, payLater: false });
  const [payError, setPayError] = useState('');

  const handlePayLaterCLick = () => {
    setPayStatuses({ payNow: false, payLater: true });
    setPayError('');
  }

  const handlePayNowClick = () => {
    setPayStatuses({ payNow: true, payLater: false });
    setPayError('');
  }

  return (
    <MainWrapper>
        <div className='cursor-pointer mb-4'><i class="fa-solid fa-arrow-left-long fa-2xl" style={{ color: '#fff' }}></i></div>
        <div className='text-universal850 font-bold text-white text-[2.375rem]'>Join our network</div>
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
              if(!payStatuses.payNow && !payStatuses.payLater) {
                setPayError('Please select a payment option');
                return false;
              }
              dispatch(postInformation({ ...values, pay_now: 'true', pay_later: 'false', navigate }));
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='mb-8'>
                  <Field as={Input} placeholder="Name" type="text" name="name" icon="user" label="Name" />
                  <ErrorMessage name="name" component="div" />
                </div>
                <div className='mb-8'>
                  <Field as={Input} placeholder="company" type="text" name="company" icon="building" label="Company" />
                  <ErrorMessage name="company" component="div" />
                </div>
                <div className='mb-8'>
                  <Field as={Input} placeholder="Mobile phone" type="text" name="mobile_phone" icon="mobile-button" label="Mobile phone number" />
                  <ErrorMessage name="mobile_phone" component="div" />
                </div>
                <div className='mb-8'>
                  <Field as={Input} placeholder="E-mail" type="email" name="email_address" icon="envelope" label="Email address" />
                  <ErrorMessage name="email_address" component="div" />
                </div>
                <div className='mb-8'>
                  <Field as={Input} placeholder="Postcode" type="text" name="postcode" icon="house" label="Postcode" />
                  <ErrorMessage name="postcode" component="div" />
                </div>
                <div>
                  <div>
                    <i class='fa-solid fa-wrench' style={{ color: '#FF733C' }}></i>
                    <span className='ml-2 font-bold'>What servides are you interested in?</span>
                  </div>
                  <div className='text-disabled-grey text-sm'>Please select the services you’re interested in offering your customers</div>
                  <div className='flex mt-4'>
                    <div>
                      <BorderButton onClick={handlePayLaterCLick} text="PayLater" active={payStatuses?.payLater} />
                    </div>
                    <div className='ml-4'>
                      <BorderButton onClick={handlePayNowClick} text="PayNow" active={payStatuses?.payNow} />
                    </div>
                  </div>
                  {payError && <div className='mt-4 pl-2'>{payError}</div>}
                </div>
                <div>
                  <button className='bg-shamrock mt-5 py-3 px-4 border boder-active-bg-dark rounded-full flex items-center justify-center w-full' type="submit" disabled={isSubmitting}>
                    {submittingForm ? 'Loading...' : 'Submit'}
                    {!submittingForm && <div className='ml-2.5 pt-0.5'><i class='fa-solid fa-arrow-right'></i></div> }
                  </button>
                </div>
                <div className='flex justify-center mt-6'>
                  <span>Already registered?</span>
                  <span className='pl-1 text-shamrock cursor-pointer'>Login</span>
                </div>
              </Form>
            )}
          </Formik>
        </BoxWrapper>
      </MainWrapper>
  );
}

export default SignupModule;
