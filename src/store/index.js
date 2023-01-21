import {createStore} from "vuex";

const store = createStore({
    state: {
        user: {
            'name': 'Cody Fisher',
            'email': 'codyfisher@gmail.com',
            'avatar': 'https://media.licdn.com/dms/image/D4D35AQEnH3pFaKE_Bw/profile-framedphoto-shrink_400_400/0/1672698826354?e=1674849600&v=beta&t=Fi5Q3Kozqi7-vBEDbs8_0KC6J4lpGuyU1IqjSzZ1xO8'
        },
        recordings: [
            {
                'display': 'https://www.techsmith.com/blog/wp-content/uploads/2021/02/TSC-thumbnail-example-1024x576.png',
                'title': 'Getting it right the first time',
                'description': 'The Video description is shown here if the user has added it.',
                'views': '300',
                'size': '540KB',
                'last_modified': 'a month ago',
                'duration': '1:30'
            },
            {
                'display': 'https://i.ytimg.com/vi/r_2tsLb__-E/maxresdefault.jpg',
                'title': 'Getting it right the first time',
                'description': 'The Video description is shown here if the user has added it.',
                'views': '300',
                'size': '540KB',
                'last_modified': 'a month ago',
                'duration': '1:30'
            },
            {
                'display': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs313OoZbXWxDDiS7g8i_GJC3NCNcPoLuhw&usqp=CAU',
                'title': 'Getting it right the first time',
                'description': 'The Video description is shown here if the user has added it.',
                'views': '300',
                'size': '540KB',
                'last_modified': 'a month ago',
                'duration': '1:30'
            },
            {
                'display': 'https://pbblogassets.s3.amazonaws.com/uploads/2019/12/02140921/thumbnail-cover.jpg',
                'title': 'Getting it right the first time',
                'description': 'The Video description is shown here if the user has added it.',
                'views': '300',
                'size': '540KB',
                'last_modified': 'a month ago',
                'duration': '1:30'
            },
            {
                'display': 'https://enviragallery.com/wp-content/uploads/2015/12/videogallery.png',
                'title': 'Getting it right the first time',
                'description': 'The Video description is shown here if the user has added it.',
                'views': '300',
                'size': '600KB',
                'last_modified': 'two month ago',
                'duration': '1:30'
            },
        ]



    }
})

export default store
