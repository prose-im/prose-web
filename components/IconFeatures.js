import Icon from "./Icon";

const features = [
  { icon: "Bell", title: "Privacy First", description: "Every team member’s identity can be securely verified." },
  { icon: "Bell", title: "Share images & files", description: "Every team member’s identity can be securely verified." },
  { icon: "Bell", title: "Manage your messaging history", description: "Every team member’s identity can be securely verified." },
  { icon: "Bell", title: "Invite team members", description: "Every team member’s identity can be securely verified." },
  { icon: "Bell", title: "Search everything", description: "Every team member’s identity can be securely verified." },
  { icon: "Bell", title: "Call anyone in your team", description: "Every team member’s identity can be securely verified." },
];

function IconFeature({ icon, title, description }) {
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

export default function IconFeatures() {
  return (
    <div className="icon-features-grid">
      {features.map(({ icon, title, description }, idx) => (
        <IconFeature key={idx} icon={icon} title={title} description={description} />
      ))}
    </div>
  );
}
