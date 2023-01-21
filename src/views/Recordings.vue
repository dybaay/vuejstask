<script>
import {mapState} from "vuex";

export default {
    data() {
        return {
            showModal: false,
            recordScreen: false,
            recordCamera: false,
            recordMic: false,
        }
    },
    methods: {
        startRecording(){
            if (this.recordScreen){
                navigator.mediaDevices.getDisplayMedia({video:true})
            }
            if (this.recordCamera){
            navigator.mediaDevices.getUserMedia({video:true})
            }
            if (this.recordMic){
                navigator.mediaDevices.getUserMedia({audio:true})
            }

            this.$router.push('/preview')
        }
    },

    computed: {
        ...mapState(['recordings'])
    }
}
</script>

<template>
    <section class="recordings">
        <div class="sub-header">
            <span>snapbyte</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="fs-14">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            <span>My Recordings</span>
        </div>
        <div class="main-header">
            <div class="title">my recordings <span class="number">25</span></div>
            <div class="options">
                <div class="option date">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="fs-14">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                    <span>By Date</span>
                </div>
                <div class="option filter">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="fs-14">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                    <span>Add Filter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="fs-14">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
                <div class="option request">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="fs-14 white">
                        <path stroke-linecap="round"
                              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span>New Request</span>
                </div>
                <div v-on:click="showModal = true" class="option start">
                    <span class="rec">REC</span>
                    <span>Start Recording</span>
                </div>
            </div>
        </div>
        <div class="recording-table">
            <table cellspacing="0" class="table">
                <thead>

                <tr>
                    <th>Recordings</th>
                    <th>Title</th>
                    <th>Views</th>
                    <th>Size</th>
                    <th>Last Modified</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>

                <tr v-for="(recording, index) in recordings">
                    <td>
                        <p></p>
                        <img :src="recording.display" class="video-thumbnail" alt="video thumbnail">
                    </td>
                    <td>
                        <h3>{{ recording.title }}</h3>
                        <p>{{ recording.description }}</p>
                    </td>
                    <td class="views">{{ recording.views }}</td>
                    <td class="size">{{ recording.size }}</td>
                    <td class="modified">{{ recording.last_modified }}</td>
                    <td>
                        <a href="#">

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 stroke-width="1.5" stroke="currentColor" class="fs-40">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </a>

                    </td>
                </tr>
<!--                <tr>-->
<!--                    <td>-->
<!--                        <img src="src/assets/images/vidth.jpeg" class="video-thumbnail" alt="video thumbnail">-->
<!--                    </td>-->
<!--                    <td>-->
<!--                        <h3>Getting it right the first time</h3>-->
<!--                        <p>The Video description is shown here if the user has added it.</p>-->
<!--                    </td>-->
<!--                    <td class="views">324</td>-->
<!--                    <td class="size">923KB</td>-->
<!--                    <td class="modified">3 months ago</td>-->
<!--                    <td>-->
<!--                        <a href="#">-->

<!--                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"-->
<!--                                 stroke-width="1.5" stroke="currentColor" class="fs-40">-->
<!--                                <path stroke-linecap="round" stroke-linejoin="round"-->
<!--                                      d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />-->
<!--                            </svg>-->
<!--                        </a>-->

<!--                    </td>-->
<!--                </tr>-->
                </tbody>
            </table>
        </div>
    </section>

    <div v-if="showModal" class="modal-container">
        <div class="modal">
            <div class="header">
                {{ media }}
                <h3>New Recording</h3>
                <span id="closeIcon" v-on:click="showModal = false" class="closeIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" class="fs-30">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </span>
            </div>
            <div class="body">
                <p class="save-text">Save the recording in</p>
                <button class="chose">
                    <span>Select a project</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" class="fs-20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </span>
                </button>
                <div class="records">
                    <div class="record">
                        <span>Record screen</span>
                        <label class="switch">
                            <input id="screen" v-model="recordScreen" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                    <div class="record">
                        <span>Record camera</span>
                        <label class="switch">
                            <input id="camera" v-model="recordCamera" type="checkbox">
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                    <div class="record">
                        <span>Record mic</span>
                        <label class="switch">
                            <input id="mic" v-model="recordMic" type="checkbox" >
                            <span class="slider round">
                            </span>
                        </label>
                    </div>
                </div>
                <button v-on:click="startRecording" class="start-recording" :disabled="!recordCamera && !recordScreen && !recordMic">
                    Start Recording
                </button>
            </div>
        </div>
    </div>

</template>

