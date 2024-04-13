import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import * as Icon from "react-bootstrap-icons";

function MyWork() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2018 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Icon.BriefcaseFill />}
        >
          <h4 className="vertical-timeline-element-title">
            Concentrix(Prokarma)
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Client: Union Pacific Railroad
          </h5>
          <div className="vertical-timeline-element-subtitle">Omaha, NE</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="April 2016 - May 2018"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Icon.BriefcaseFill />}
        >
          <h4 className="vertical-timeline-element-title">HCL America</h4>
          <h5 className="vertical-timeline-element-subtitle">Client: FedEx</h5>
          <div className="vertical-timeline-element-subtitle">
            Colorado Springs, CO
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2011 - April 2016"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<Icon.BriefcaseFill />}
        >
          <h4 className="vertical-timeline-element-title">HCLTech</h4>
          <h5 className="vertical-timeline-element-subtitle">
            Client(s): Uti, Maersk, Novartis, FedEx
          </h5>
          <div className="vertical-timeline-element-subtitle">
            Hyderabad, India
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2011"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<Icon.BookFill />}
        >
          <h4 className="vertical-timeline-element-title">
            Computer Science & Engineering
          </h4>
          <h5 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<Icon.Star />}
        />
      </VerticalTimeline>
    </div>
  );
}
export default MyWork;
