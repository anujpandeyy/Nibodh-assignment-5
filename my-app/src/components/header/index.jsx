import React from 'react'

export default function Header() {
    return (
        <div className="row header_container_dark ">
<div className="col-6 d-flex ">
<div className="icon">

<i class="fab fa-facebook-f"></i>
<i class="fab fa-linkedin-in"></i>

</div>

<div className="phone_head">
+91-55555555
</div>
</div>

<div className="col-6">
<div className="login_signup_container">



<button>
<i class="far fa-user"></i>
        &nbsp;
    SIGNUP</button>
<button><i class="fas fa-lock"></i> &nbsp; LOGIN</button>

</div>

</div>


            
        </div>
    )
}

