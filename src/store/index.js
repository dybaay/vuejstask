import {createStore} from "vuex";

const store = createStore({
    state: {
        user: {
            'name': 'Cody Fisher',
            'email': 'codyfisher@gmail.com',
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
