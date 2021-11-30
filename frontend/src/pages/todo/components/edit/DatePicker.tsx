import React from 'react';
import type {Moment} from 'moment'
import moment from 'moment';
import {DatePicker} from 'antd'

export interface IndexProps {
  onOpenChange: (open: boolean) => void;
  getPopupContainer: () => any;
  onChange: (date: Moment | null, value: string) => void
  time?: string,
}

const Index: React.FC<IndexProps> = (
  {
    onOpenChange,
    getPopupContainer,
    onChange,
    time
  }) => {

  function range(start: number, end: number) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }


  function disabledDate(current: Moment) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }


  return (
    <DatePicker
      format="YYYY-MM-DD HH:mm:ss"
      disabledDate={disabledDate}
      disabledTime={disabledDateTime}
      showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}
      onOpenChange={(e) => onOpenChange(e)}
      getPopupContainer={getPopupContainer}
      onChange={(date, value) => {
        onChange && onChange(date, value)
      }}
      defaultValue={time ? moment(time) : undefined}
    >添加截止日期</DatePicker>
  )
};

export default Index;
