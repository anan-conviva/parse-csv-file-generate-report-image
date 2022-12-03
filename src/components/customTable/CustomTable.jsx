import React, {useEffect, useState} from 'react';
import {Table, Statistic} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import './customTable.less';
import Papa from 'papaparse';
import csvData from '../../data/lanjian_demo.csv';

const toPoint = (percent) => {
    let str = percent.replace('%', '');
    str = Math.abs(str);
    return str;
}

const ValueDom = (value) => {
    return (
        <>
            {value.valuesChange.indexOf('-') > -1 ?
                <Statistic
                    value={value.values}
                    valueStyle={{color: '#cf1322', fontSize: '14px'}}
                    prefix={<ArrowDownOutlined/>}
                /> : <Statistic
                    value={value.values}
                    valueStyle={{color: '#3f8600', fontSize: '14px'}}
                    prefix={<ArrowUpOutlined/>}
                />
            }
        </>
    )
};

const DayOrWeekRadioDom = (value) => {
    return (
        <>
            {value.indexOf('-') > -1 ?
                (<Statistic
                        value={value}
                        valueStyle={{fontSize: '14px', position: 'relative'}}
                        prefix={<div className={'statisticUpBefore'}
                                     style={{'--width': `${toPoint(value) > 100 ? 100 : toPoint(value)}%`}}></div>}
                    />
                ) :
                (<Statistic
                        value={value}
                        valueStyle={{fontSize: '14px', position: 'relative'}}
                        prefix={<div className={'statisticDownBefore'}
                                     style={{'--width': `${toPoint(value) > 100 ? 100 : toPoint(value)}%`}}></div>}
                    />
                )}
        </>
    )
};

const columns = [
    {
        title: 'Metrics',
        dataIndex: 'Metrics',
        key: 'Metrics',
    },
    {
        title: 'Values',
        dataIndex: 'Values',
        key: 'Values',
        render: (item) => (
            <>
                {ValueDom(item)}
            </>
        )
    },
    {
        title: 'Values Change',
        dataIndex: 'Values Change',
        key: 'Values Change',
    },
    {
        title: 'Day-to-Day Ratio',
        dataIndex: 'Day-to-Day Ratio',
        key: 'Day-to-Day Ratio',
        render: (item) => (
            <>
                {DayOrWeekRadioDom(item)}
            </>
        )
    },
    {
        title: 'Week-on-Week Ratio',
        dataIndex: 'Week-on-Week Ratio',
        key: 'Week-on-Week Ratio',
        render: (item) => (
            <>
                {DayOrWeekRadioDom(item)}
            </>
        )
    },
];

const CustomTable = () => {
    const [parsedCsvData, setParsedCsvData] = useState([]);

    const dataConversion = (csvData) => {
        let columnsData = []
        if (!Array.isArray(csvData)) return columnsData;
        for (let i = 1; i < csvData.length - 1; i++) {
            columnsData.push({
                key: i,
                [csvData[0][0]]: csvData[i][0],
                [csvData[0][1]]: {
                    values: csvData[i][1],
                    valuesChange: csvData[i][2],
                },
                [csvData[0][2]]: csvData[i][2],
                [csvData[0][3]]: csvData[i][3],
                [csvData[0][4]]: csvData[i][4],
            })
        }
        console.log(csvData, 'csvData');
        console.log(columnsData, 'columnsData');
        return columnsData;
    };

    useEffect(() => {
        Papa.parse(csvData, {
            download: true,
            complete: data => {
                const columnsData = dataConversion(data.data);
                setParsedCsvData(columnsData);
            }
        });
    }, []);

    return (
        <>
            {parsedCsvData ? <Table columns={columns} dataSource={parsedCsvData} pagination={false}/> : null}
        </>
    )
};
export default CustomTable;