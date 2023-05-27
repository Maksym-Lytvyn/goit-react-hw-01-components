import PropTypes from "prop-types";
import cssProfile from './Profile.module.css'

const Profile = ({username, tag, location, avatar, stats}) => (
    <div className={cssProfile.profile}>
        <div className="description">
        <img
            src={avatar}
            alt="User avatar"
            className={cssProfile.avatar}
        />
    <p className={cssProfile.name}>{username}</p>
    <p className={cssProfile.tag}>@{tag}</p>
    <p className={cssProfile.location}>{location}</p>
  </div>

  <ul className={cssProfile.stats}>
    <li>
      <span className={cssProfile.label}>Followers</span>
      <span className={cssProfile.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={cssProfile.label}>Views</span>
      <span className={cssProfile.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={cssProfile.label}>Likes</span>
      <span className={cssProfile.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
)


Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;