import Icon from "./Icon";

export default function IconFeature({ icon, title, description }) {
  return (
    <div className="icon-feature">
      <div className="icon-feature-icon">
        <Icon type={icon} />
      </div>
      <h3 className="title-xs">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
