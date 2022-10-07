import react from "react";
import '../../node_modules/bootstrap/dist/css'

function navbar(){
    return(
        <nav class="navbar navbar-expand-sm navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="">Raven</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a href="#skilll" class="nav-link active">SKILLS</a>
                        </li>
                        <li class="nav-item">
                            <a href="#teamm" class="nav-link active">TEAM</a>
                        </li>
                        <li class="nav-item">
                            <a href="#pricing" class="nav-link active">PRICING</a>
                        </li>
                        <li class="nav-item">
                            <a href="#Contact" class="nav-link active">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar;