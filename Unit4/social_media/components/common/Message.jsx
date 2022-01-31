import { useRouter } from "next/router";
import { Icon, Message } from "semantic-ui-react";
import { useState } from "react";
import Link from "next/link";

export const HeaderMessage = () => {

  const router = useRouter()
  const isSignup= router.pathname === "/signup";
  const [hideMessage, sethideMessage] = useState(false);
  return (
    <>
      {isSignup ? <>
        <Message warning>
          <Icon name="help"></Icon>
          Existing user ? <Link href="/login"> Login Here </Link>
        </Message>
      </> : <>
        <Message>
          <Icon name="help"></Icon>
          New user ? <Link href="/signup">Sign up Here </Link>
        </Message>
      </>}{
                <Message warning>
                <Icon name="lock"></Icon>
                <Link href="/reset"> Forgot Password </Link>
              </Message>
      }
    </>
    
  );
};

export const FooterMessage = () => {
  return <Message header = "footer message header" content="message content" />
};
