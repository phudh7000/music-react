import * as types from '../constant/index'

var initialState = [
    {
        name: 'Hanava',
        singer: 'Camila Cabello, Young Thug',
        path: './songs/Camila Cabello Havana Lyrics ft Young Thug.mp3',
        image: 'https://upload.wikimedia.org/wikipedia/vi/9/98/Havana_%28featuring_Young_Thug%29_%28Official_Single_Cover%29_by_Camila_Cabello.png',
        type: 'US-UK'
    },
    {
        name: 'Reality',
        singer: 'Lost Frequencies feat. Janieck Devy',
        path: './songs/Reality-Lost-Frequencies-Janieck-Devy.mp3',
        image: 'https://i.scdn.co/image/ab67616d0000b273f752bd102113993f7c9429db',
        type: 'US-UK'
    },
    {
        name: 'Heroes Tonight',
        singer: 'Janji, Johnning',
        path: './songs/Heroes-Tonight-Janji-Johnning.mp3',
        image: 'https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/143/1000x0/heroes-tonight-feat-johnning-1586946923-LsvZKuKHRf.jpg',
        type: 'US-UK'
    },
    {
        name: 'Way Back',
        singer: 'Vicetone, Cozi Zuehlsdorff',
        path: './songs/Way Back - Vicetone Cozi Zuehlsdorff.mp3',
        image: 'https://avatar-nct.nixcdn.com/song/2018/03/09/c/c/3/3/1520561422936_640.jpg',
        type: 'US-UK'
    },
    {
        name: 'Closer',
        singer: 'The Chainsmokers, Halsey',
        path: './songs/The Chainsmokers Closer Lyrics ft Halsey.mp3',
        image: 'https://i1.sndcdn.com/artworks-000181062702-17yavc-t500x500.jpg',
        type: 'US-UK'
    },
    {
        name: 'All Falls Down',
        singer: 'Alan Walker, Noah Cyrus & Digital Farm Animals',
        path: './songs/All Falls Down.mp3',
        image: 'https://i1.sndcdn.com/artworks-000545138619-fy7g9m-t500x500.jpg',
        type: 'US-UK'
    },
    {
        name: 'So Far Away',
        singer: 'Martin Garrix  David Guetta',
        path: './songs/Martin Garrix  David Guetta  So Far Away Official Video feat Jamie Scott  Romy Dya.mp3',
        image: 'https://data.chiasenhac.com/data/cover/72/71105.jpg',
        type: 'US-UK'
    },
    {
        name: 'That Girl',
        singer: 'Olly Murs',
        path: './songs/That Girl  Olly Murs.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/song/2018/06/20/7/1/5/3/1529487573799_640.jpg',
        type: 'US-UK'
    },
    {
        name: 'Something Just Like This',
        singer: 'The Chainsmokers & Coldplay',
        path: './songs/The Chainsmokers  Coldplay  Something Just Like This.mp3',
        image: 'https://data.chiasenhac.com/data/cover/72/71105.jpg',
        type: 'US-UK'
    },
    {
        name: 'Đập vỡ cây đàn',
        singer: 'Quang Lê',
        path: './songs/Dap-Vo-Cay-Dan-Quang-Le.mp3',
        image: 'https://m.media-amazon.com/images/I/8113nfM3SXL._SS500_.jpg',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Đêm buồn tình lẻ',
        singer: 'Trường Vũ',
        path: './songs/Dem-Buon-Tinh-Le-Truong-Vu.mp3',
        image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/2/8/2830357e17c4d9bdf9f1fb23d3f36cde_1473912122.jpg',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Người đi ngoài phố',
        singer: 'Hoài Lâm',
        path: './songs/Nguoi-Ngoai-Pho-Hoai-Lam.mp3',
        image: 'https://i.scdn.co/image/ab67616d0000b273f7cda5e4bbd96cf0b38fc040',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Đập vỡ cây đàn',
        singer: 'Quang Lê',
        path: './songs/Dap-Vo-Cay-Dan-Quang-Le.mp3',
        image: 'https://m.media-amazon.com/images/I/8113nfM3SXL._SS500_.jpg',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Đêm buồn tình lẻ',
        singer: 'Trường Vũ',
        path: './songs/Dem-Buon-Tinh-Le-Truong-Vu.mp3',
        image: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/2/8/2830357e17c4d9bdf9f1fb23d3f36cde_1473912122.jpg',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Người đi ngoài phố',
        singer: 'Hoài Lâm',
        path: './songs/Nguoi-Ngoai-Pho-Hoai-Lam.mp3',
        image: 'https://i.scdn.co/image/ab67616d0000b273f7cda5e4bbd96cf0b38fc040',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Vừng lá me bay',
        singer: 'Như Quỳnh',
        path: './songs/Vung-La-Me-Bay-Nhu-Quynh.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/playlist/2018/10/19/6/7/e/9/1539942251523_500.jpg',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Đập vỡ cây đàn',
        singer: 'Quang Lê',
        path: './songs/Dap-Vo-Cay-Dan-Quang-Le.mp3',
        image: 'https://m.media-amazon.com/images/I/8113nfM3SXL._SS500_.jpg',
        type: 'Nhạc trữ tình'
    },
    {
        name: 'Cheap Thrills',
        singer: 'Sia',
        path: './songs/Sia  Cheap Thrills Lyrics.mp3',
        image: 'https://i1.sndcdn.com/artworks-000578385494-1tcoaj-t500x500.jpg',
        type: 'Running'
    },
    {
        name: 'I Wanna Go',
        singer: 'Britney Spears',
        path: './songs/Britney Spears  I Wanna Go Lyrics.mp3',
        image: 'https://upload.wikimedia.org/wikipedia/vi/b/bd/Britney_Spears_-_I_Wanna_Go.jpg',
        type: 'Running'
    },
    {
        name: 'Give Me Everything',
        singer: 'Pitbull',
        path: './songs/Pitbull  Give Me Everything ft NeYo Afrojack Nayer  TraduçãoLegendado.mp3',
        image: 'https://i1.sndcdn.com/artworks-000354084999-sulq8o-t500x500.jpg',
        type: 'Running'
    },
    {
        name: 'What Makes You Beautiful',
        singer: 'One Direction',
        path: './songs/One Direction  What Makes You Beautiful Lyrics.mp3',
        image: 'https://file.tinnhac.com/resize/600x-/music/2018/10/31/20181031154908-4ea5.jpg',
        type: 'Running'
    },
    {
        name: 'Cheap Thrills',
        singer: 'Sia',
        path: './songs/Sia  Cheap Thrills Lyrics.mp3',
        image: 'https://i1.sndcdn.com/artworks-000578385494-1tcoaj-t500x500.jpg',
        type: 'Running'
    },
    {
        name: 'I Wanna Go',
        singer: 'Britney Spears',
        path: './songs/Britney Spears  I Wanna Go Lyrics.mp3',
        image: 'https://upload.wikimedia.org/wikipedia/vi/b/bd/Britney_Spears_-_I_Wanna_Go.jpg',
        type: 'Running'
    },
    {
        name: 'Give Me Everything',
        singer: 'Pitbull',
        path: './songs/Pitbull  Give Me Everything ft NeYo Afrojack Nayer  TraduçãoLegendado.mp3',
        image: 'https://i1.sndcdn.com/artworks-000354084999-sulq8o-t500x500.jpg',
        type: 'Running'
    },
    {
        name: 'What Makes You Beautiful',
        singer: 'One Direction',
        path: './songs/One Direction  What Makes You Beautiful Lyrics.mp3',
        image: 'https://file.tinnhac.com/resize/600x-/music/2018/10/31/20181031154908-4ea5.jpg',
        type: 'Running'
    },
    {
        name: 'Play',
        singer: 'K-391-Alan-Walker-Martin-Tungev',
        path: './songs/Play-K-391-Alan-Walker-Martin-Tungev.mp3',
        image: 'https://i1.sndcdn.com/artworks-000590806844-fd8mbg-t500x500.jpg',
        type: 'Gaming'
    },
    {
        name: 'Want You To Know',
        singer: 'Slushii',
        path: './songs/Want-You-To-Know-Slushii.mp3',
        image: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/23/f9/8b/23f98b33-7565-4f9f-658e-a34e2de1c6d3/859726336234_cover.jpg/400x400cc.jpg',
        type: 'Gaming'
    },
    {
        name: 'Unity',
        singer: 'TheFatRat',
        path: './songs/Unity-TheFatRat.mp3',
        image: 'https://i1.sndcdn.com/artworks-nOt146WaqbF5jqfd-6d0nAA-t500x500.jpg',
        type: 'Gaming'
    },
    {
        name: 'Candyland',
        singer: 'Tobu',
        path: './songs/Candyland-Tobu.mp3',
        image: 'https://i1.sndcdn.com/artworks-000235104044-6tvhrp-t500x500.jpg',
        type: 'Gaming'
    },
    {
        name: 'Sign',
        singer: 'DEAMN',
        path: './songs/Sign-DEAMN.mp3',
        image: 'https://avatar-ex-swe.nixcdn.com/playlist/2017/10/19/1/9/f/d/1508384494669_500.jpg',
        type: 'Gaming'
    },
    {
        name: 'SummerTime',
        singer: 'K-391',
        path: './songs/SummerTime-K-391.mp3',
        image: 'https://i1.sndcdn.com/artworks-000198712766-0jvlju-t500x500.jpg',
        type: 'Gaming'
    },
    {
        name: 'Play',
        singer: 'K-391-Alan-Walker-Martin-Tungev',
        path: './songs/Play-K-391-Alan-Walker-Martin-Tungev.mp3',
        image: 'https://i1.sndcdn.com/artworks-000590806844-fd8mbg-t500x500.jpg',
        type: 'Gaming'
    },
    {
        name: 'Want You To Know',
        singer: 'Slushii',
        path: './songs/Want-You-To-Know-Slushii.mp3',
        image: 'https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/23/f9/8b/23f98b33-7565-4f9f-658e-a34e2de1c6d3/859726336234_cover.jpg/400x400cc.jpg',
        type: 'Gaming'
    },
]

export var currentList = initialState.filter((item)=>{
        return item.type === 'US-UK';
    })
var songList =(state = currentList, action)=>{

    switch(action.type) {
        case types.CHANGE_KIND_OF:
        currentList = initialState.filter((item)=>{
            return item.type === action.kindOf;
        })
            return currentList;
        default:
            return state;
    }
} 

export default songList;