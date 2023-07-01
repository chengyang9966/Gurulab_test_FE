import { Typography ,Row, Col, message} from 'antd';
import React, { useState, useEffect, Fragment } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import MainLayout from '../../layout/MainLayout';
import FeedBackModel from '../../components/feedbackModel';
import { submitFeedbackForm } from '../../services/feedback/feedback.service';
import { useQuery } from '../../hooks/useQueryHooks/useQueryHook';

const { Title } = Typography;
const HomePage:React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitFormLoading, setSubmitFormLoading] = useState(false);
  const [openFeedBackForm, setOpenFeedBackForm] = useState(true);

  const [messageApi, contextHolder] = message.useMessage();
  const query = useQuery();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 3000);

//     return () => clearTimeout(timer);
//   }, []);


const submitForm=async(feedbackId:string)=>{
    try {
        setSubmitFormLoading(true)
       const result= await submitFeedbackForm({
            email:query.get('email'),
            feedbackId,
            remarks:''
        })
        messageApi.open({
            type: 'success',
            content: 'Submit Feedback Successfully',
          });
          setSubmitFormLoading(false)
          setOpenFeedBackForm(false)


    } catch (error) {
        messageApi.open({
            type: 'error',
            content: 'Fail to Submit Feedback',
          });
          setSubmitFormLoading(false)
    }
  }

  return (
    <Fragment>
    {contextHolder}
        <Row style={{textAlign:'center'}}>
        <Col span={24}>
      {isLoading  || isSubmitFormLoading? (
        <LoadingSpinner />
      ) : (
        <MainLayout>
        <Title level={2}>Congratz! You have completed the class</Title>
        <FeedBackModel submitForm={submitForm} handleCancelFeedBackForm={()=>setOpenFeedBackForm(false)} openFeedBackForm={openFeedBackForm}/>
        </MainLayout>
      )}
      </Col>
        </Row>
    </Fragment>
  );
};

export default HomePage;
