import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';

import { Layout } from 'antd';
import SideMenu from './side-menu/side-menu';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Router>

    <Layout style={{ minHeight: '100vh' }}>

      <SideMenu />

      <Layout>

        <Header style={{ background: '#fff', padding: 0 }}>
          <div style={{ margin: '0 2em' }}>
            <h1>Simple react template</h1>
          </div>
        </Header>

        <Content style={{ margin: '2em', background: '#fff', }}>

          <div style={{ margin: '2em' }}>
            <Route path="/:id" component={Child}/>
          </div>

        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Just a footer
        </Footer>

      </Layout>

    </Layout>

  </Router>
);

const Child = ({ match: { params: { id } } }) => (
  <div>
    <h3>ID: {id}</h3>
  </div>
);

export default App;
