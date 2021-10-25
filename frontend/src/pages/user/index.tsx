import './index.less'

export default function UserPage(props:any) {
  return (
    <div className="login-register-wrap">
      { props.children}
    </div>
  );
}
