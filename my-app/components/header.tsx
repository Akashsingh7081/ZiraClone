import {SignedIn,UserButton,SignInButton,SignedOut} from "@clerk/nextjs";

function header() {
  return (
    <div>
     <SignedOut>
 <SignInButton/>
     </SignedOut>
     <SignedIn>
        <UserButton/>
     </SignedIn>
    </div>
  )
}

export default header;
