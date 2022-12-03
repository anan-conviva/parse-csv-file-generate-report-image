import React from 'react';
import {Table, Statistic} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import './customTable.less';

const ValueDom = (value) => {
    return (
        <>
            {value.diff === 'up' ?
                <Statistic
                    value={value.value}
                    valueStyle={{color: '#3f8600', fontSize: '14px'}}
                    prefix={<ArrowUpOutlined/>}
                /> : <Statistic
                    value={value.value}
                    valueStyle={{color: '#cf1322', fontSize: '14px'}}
                    prefix={<ArrowDownOutlined/>}
                />}
        </>
    )
}

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        render: (item) => (
            <>
                {ValueDom(item)}
            </>
        )
    },
    {
        title: 'Value diff',
        dataIndex: 'value diff',
        key: 'value diff',
    },
    {
        title: '日环比',
        dataIndex: '日环比',
        key: '日环比',
        render: (item) => (
            <>
                {item > 0 ?
                    (<Statistic
                            value={item}
                            valueStyle={{
                                backgroundColor: '#3f8600',
                                color: '#fff',
                                fontSize: '14px',
                                position: 'relative'
                            }}
                            suffix={'%'}
                            prefix={
                                <div className={'statisticBefore'} style={{'--width': item}}>
                                </div>}
                        />
                    ) :
                    (<Statistic
                            value={item}
                            valueStyle={{backgroundColor: '#cf1322', fontSize: '14px', color: '#fff'}}
                            suffix={'%'}
                        />
                    )}
            </>
        )
    },
    {
        title: '周同比',
        dataIndex: '周同比',
        key: '周同比',
        render: (item) => (
            <>
                {item > 0 ?
                    (<Statistic
                            value={item}
                            valueStyle={{backgroundColor: '#3f8600', color: '#fff', fontSize: '14px'}}
                            suffix={'%'}
                        />
                    ) :
                    (<Statistic
                            value={item}
                            valueStyle={{backgroundColor: '#cf1322', fontSize: '14px', color: '#fff'}}
                            suffix={'%'}
                        />
                    )}
            </>
        )
    },
];
const data = [
    {
        'key': '1',
        'name': 'lan jian',
        'value': {
            value: 32,
            diff: 'up',
        },
        'value diff': 22,
        '日环比': '22',
        '周同比': '-11',
    },
    {
        'key': '2',
        'name': 'tong xu ping',
        'value': {
            value: 32,
            diff: 'down',
        },
        'value diff': 22,
        '日环比': '-22',
        '周同比': '11',
    },
    {
        'key': '3',
        'name': 'song yong nan',
        'value': {
            value: 32,
            diff: 'up',
        },
        'value diff': 22,
        '日环比': '22',
        '周同比': '11',
    },
];

const CustomTable = () => {
    return (
        <Table columns={columns} dataSource={data} pagination={false}/>
    )
};
export default CustomTable;