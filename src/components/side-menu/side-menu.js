import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import { updateCollapsed } from './side-menu.actions';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const SideMenu = ({ dispatch, collapsed, location: { pathname } }) => (
  <Sider
    collapsible
    collapsed={collapsed}
    onCollapse={(x) => dispatch(updateCollapsed(x))}
  >
    <div className="logo" />
    <Menu
      theme="dark"
      selectedKeys={[pathname]}
      mode="inline"
    >
      <Menu.Item key="/">
        <Link to="/">
          <div>
            <Icon type="home" />
            <span>home</span>
          </div>
        </Link>
      </Menu.Item>
      <SubMenu
        key="sub1"
        title={<span><Icon type="idcard" /><span>routes</span></span>}
      >
        <Menu.Item key="/first"><Link to="/first">first</Link></Menu.Item>
        <Menu.Item key="/second"><Link to="/second">second</Link></Menu.Item>
      </SubMenu>
    </Menu>
  </Sider>
);

SideMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

SideMenu.defaultProps = {
  dispatch: () => {},
  collapsed: false,
};

export default withRouter(connect(({
  sideMenu: {
    collapsed,
  } }) => ({
  collapsed,
}))(SideMenu));
