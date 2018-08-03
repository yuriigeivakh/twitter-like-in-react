import React, { Component } from 'react';


const TWEETS = [
    {
        id: 1,
        author: 'bennettb83',
        text: 'Distinguishing between a muffin and chihuahua will be the next big hurdle in #machinelearning. @Redo @Louis_Monier',
        image: 'https://pbs.twimg.com/media/ChL0GdiU0AIWdC_.jpg',
        avatar: 'https://us.123rf.com/450wm/fosin/fosin1508/fosin150800089/44328737-super-hero-mask-glasses-collection-flat-style-avatar-icon-colorful-vector-illustration-eps-8-geek-hi.jpg?ver=6',
        likes: 233,
        retweets: 212
    },
    {
        id: 2,
        author: 'r00k',
        text: 'Beginner: I wrote 1,000 lines of code! Intermediate: I deleted 1,000 lines of code! Expert: I prevented code from being written!',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZKRHEVYc1Mnok2Vsko87zHvfgWGgL5p9mrissmMKdYyOtlpc',
        likes: 2233,
        retweets: 1084
    },
    {
        id: 3,
        author: 'anechka45789',
        text: 'Nobody retweets me',
        image: 'https://styler.rbc.ua/static/img/c/a/cats_650x410.jpg',
        avatar: 'https://thumbs.dreamstime.com/b/old-man-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-vector-stock-91602443.jpg',
        likes: 3,
        retweets: 0
    },
    {
        id: 4,
        author: 'bendhalpern',
        text: `Sometimes when I'm writing Javascript I want to throw up my hands and say "this is bullshit!" but I can never remember what "this" refers to`,
        avatar: 'https://cdn0.iconfinder.com/data/icons/unigrid-flat-human-vol-2/90/011_101_anonymous_anonym_hacker_vendetta_user_human_avatar-512.png',
        likes: 9457,
        retweets: 10833
    },
];

function shuffle(arr) {
    const result = [...arr];

    result.sort(() => 0.5 - Math.random());

    return result;
}

class Tweet extends Component{
    render() {
        const {
            key1,
            avatar,
            author,
            text,
            image,
            retweets,
            likes
        } = this.props;

        console.log('render');

        return (
            <div className="tweet">
                <img className="tweet-avatar" src={avatar} />

                <div className="tweet-body">
                    <a
                        className="tweet-author"
                        href={`https://twitter.com/${author}`}
                        target="blank"
                    >
                        @{author} {key1}
                    </a>

                    <p className="tweet-text">
                        {text}
                    </p>

                    {
                        image &&
                        <img className="tweet-image" src={image} />
                    }

                    <div className="tweet-stats">
                        <div className="tweet-retweets">
                            <i className="tweet-stat-icon fa fa-retweet" />
                            {retweets || null}
                        </div>
                        <div className="tweet-likes">
                            <i className="tweet-stat-icon fa fa-heart" />
                            {likes || null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            tweets: []
        }
        this.handleShuffle = this.handleShuffle.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleShuffle() {
        this.setState({
            tweets: shuffle(this.state.tweets)
        });
    }

    handleAdd() {
        const { tweets } = this.state;

        if(tweets.length < TWEETS.length) {
            this.setState({
                tweets: [
                    ...tweets,
                    TWEETS[tweets.length],
                ]
            });
        }
    }

    render() {
        console.log(this.state.tweets.map(t => t.id));

        return (
            <div>
                <div className="button_wrapper">
                    <button onClick={this.handleShuffle}>
                        Shuffle
                    </button>
                    <button onClick={this.handleAdd}>
                        Add
                    </button>
                </div>

                {
                    this.state.tweets.map((tweet, i) =>
                        <Tweet
                            key={Math.random()}
                            key1={i}
                            author={tweet.author}
                            text={tweet.text}
                            image={tweet.image}
                            avatar={tweet.avatar}
                            likes={tweet.likes}
                            retweets={tweet.retweets}
                        />
                    )
                }
            </div>
        )
    }

};

export default App


