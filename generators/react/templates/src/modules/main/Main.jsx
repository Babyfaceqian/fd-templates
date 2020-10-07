import React from 'react';
import styles from './Main.less';
import { Button } from 'antd';
export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentWillMount() {
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className={styles.main}>A React Front-End Project<Button type="primary">测试</Button></div>
    );
  }
}
