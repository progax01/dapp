import React from 'react';
import styled from 'styled-components';
import MyForm from './MyForm';
import Layout from '../component/Layout';

const DashboardContainer = styled.div`
  padding: 0px; /* Adjust for the navbar height */
`;

const DashboardPage = () => {
  return (
    <Layout>
      <DashboardContainer>
        {/* Your dashboard content goes here */}
        <h1>Create Your KYC</h1>
        <p>Do your kyc in blockchain once and share with anyone</p>
        <MyForm />
      </DashboardContainer>
    </Layout>
  );
};

export default DashboardPage;