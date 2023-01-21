<template>
    <div class="sidebar">
        <ul class="sidebar-items">
            <li class="">
                <router-link to="/my-recordings" exact-active-class="active" class="sidebar-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25.976" height="20.601" stroke="#21455E"
                         viewBox="0 0 25.976 20.601" class="side-icon">
                        <g id="video-player" transform="translate(0 -6)">
                            <path id="Path_9224" data-name="Path 9224"
                                  d="M29.615,24.2,24.688,21.07a.448.448,0,0,0-.688.378v6.27a.448.448,0,0,0,.688.378l4.926-3.135a.448.448,0,0,0,0-.756ZM24.9,26.9V22.264l3.644,2.319Z"
                                  transform="translate(-13.251 -8.282)" fill="#21455e" />
                            <path id="Path_9225" data-name="Path 9225"
                                  d="M25.528,6H.448A.448.448,0,0,0,0,6.448V26.153a.448.448,0,0,0,.448.448h25.08a.448.448,0,0,0,.448-.448V6.448A.448.448,0,0,0,25.528,6ZM4.479,15.853H.9V11.822H4.479Zm-3.583.9H4.479v4.031H.9Zm4.479,4.479V6.9H20.6v18.81H5.374ZM25.08,15.853H21.5V11.822H25.08Zm-3.583.9H25.08v4.031H21.5ZM25.08,6.9v4.031H21.5V6.9ZM.9,6.9H4.479v4.031H.9Zm0,18.81V21.675H4.479v4.031Zm24.184,0H21.5V21.675H25.08Z"
                                  transform="translate(0 0)" fill="#21455e" />
                        </g>
                    </svg>
                    <span class="side-link">My Recordings</span>
                </router-link>
            </li>

            <li>
                <router-link to="/home" exact-active-class="active" class="sidebar-item" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="#21455E" class="fs-20 side-icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                    </svg>
                    <span class="side-link">Requested</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>
