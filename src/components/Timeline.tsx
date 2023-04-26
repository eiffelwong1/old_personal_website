import React from 'react';
import './TimeLine.css';

export interface ITimelineEvent {
  date: string;
  title: string;
  description?: string;
  type?: "work" | "education" | "personal";
}

export interface ITimelineProps {
  events: ITimelineEvent[];
}

const TimelineEvent: React.FC<ITimelineEvent> = ({ date, title, description, type }) => {
  return (
    <div className="timeline-event">
      <div className={"timeline-date " + type}>
        {date}
      </div>
      <div className="timeline-content ">
        <h3 className="timeline-title">{title}</h3>
        <p className="timeline-description">{description}</p>
      </div>
    </div>
  );
};

const Timeline: React.FC<ITimelineProps> = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <TimelineEvent key={index} date={event.date} title={event.title} description={event.description} type={event.type} />
      ))}
    </div>
  );
};

export default Timeline;