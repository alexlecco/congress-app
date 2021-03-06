import React from "react";
import "./MemberDetails.scss";
import { useLocation, Link } from "react-router-dom";

function MemberDetails() {
  const { state } = useLocation();
  const { member } = state;
  const getFullName = () =>
    `${member.short_title} ${member.first_name} ${member.last_name}`;

  return (
    <div className="memberDetailsContainer">
      <Link to={"/"} className="backButton">
        Back
      </Link>
      <div>{getFullName()}</div>
      <div className="memberCard">
        <div className="memberCard__panel">
          <p>title: {member.title}</p>
          <p>total votes: {member.total_votes}</p>
          <p>party: {member.party}</p>
          <p>state: {member.state}</p>
          <p>gender: {member.gender}</p>
        </div>
        <div className="memberCard__panel">
          <p>twitter account: @{member.twitter_account}</p>
          <p>facebook account: {member.facebook_account}</p>
          <p>youtube account: {member.youtube_account}</p>
          <p>phone: {member.phone}</p>
          <p>office: {member.office}</p>
        </div>
      </div>
    </div>
  );
}

export default MemberDetails;
