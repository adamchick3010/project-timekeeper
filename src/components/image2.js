import React from 'react'

export default class Svg2 extends React.Component {
    render() { 
        return (  
            <svg className="thisSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 147.4 147.4">
            <g id="Warstwa_1" data-name="Warstwa 1">
                <path onClick={() => this.props.onFill(0)} fill={this.props.fillColors[0]} stroke="#000000" d="M75.27,130.87c6.4,0,15.27-5.14,21.2-9a67.2,67.2,0,0,0,14.65-12.94c3.74-4.51,4.67-5.45,6.38-10.44s1.1-10.44,0-15.11-3.89-10.91-6.23-15.59-4.83-5.76-5.45-10.13,1.55-7.48,2.8-11.53,1.4-10.13,1.09-15-1.09-9-4.36-12-3.92-2.8-8.43-2.34-5.6.94-8.25,2.34S84,20.69,80,19.91A40.05,40.05,0,0,0,67,19.44c-4.21.63-4.05.31-6.54,1.25s-5.61-.16-7.64-.94-5-2.33-8.42-2.18a10.81,10.81,0,0,0-8.72,4.68C33.51,25.36,33,28.17,33,32.53s1.09,12.78,2.65,16.68,3.74,9,1.87,12.62a114.74,114.74,0,0,0-5.77,13.71,61,61,0,0,0-3,17.46,31.49,31.49,0,0,0,4.68,15.27C35.69,111.7,42.39,117.62,46,120a132.55,132.55,0,0,0,16.83,8.73A29.27,29.27,0,0,0,75.27,130.87Z"/>
                <path onClick={() => this.props.onFill(1)} fill={this.props.fillColors[1]} stroke="#000000" d="M53.65,29.49c0,.26-.11.55-.18.86-1.48-2-1.71-2.58-3.5-2.62s-2.43.92-3.23,2.14c-1.35,2.05-1.12,4.05-1.05,6.12a61,61,0,0,0,2.09,9.79h0a31.39,31.39,0,0,1-3.31,5c-1.68,1.84-2.6,2.76-3.67.54a59.1,59.1,0,0,1-3.52-8.11,35,35,0,0,1-1.9-10.47c0-4,1.67-8.45,4.58-10.24a7.71,7.71,0,0,1,5.58-1.61c2.75.23,3.9,1,6.57,2.45S54.18,26.66,53.65,29.49Z"/>
                <path onClick={() => this.props.onFill(2)} fill={this.props.fillColors[2]} stroke="#000000" d="M53.47,30.35a71.85,71.85,0,0,1-3.19,10.52,52.28,52.28,0,0,1-2.5,4.91A61,61,0,0,1,45.69,36c-.07-2.07-.3-4.07,1.05-6.12.8-1.22,1.4-2.19,3.23-2.14S52,28.39,53.47,30.35Z"/>
                <line onClick={() => this.props.onFill(3)} fill={this.props.fillColors[3]} stroke="#000000" x1="47.78" y1="45.78" x2="47.78" y2="45.78"/>
                <path onClick={() => this.props.onFill(4)} fill={this.props.fillColors[4]} stroke="#000000" d="M107.47,36.29c-.23,3.52-2,8.38-3.36,12.08-1.22,3.24-2.45,1.76-3.45.46A31.84,31.84,0,0,1,97.9,44.1a42.6,42.6,0,0,0,1.92-10.25c0-2.45.47-3.87-1.2-5.32s-2.78-1.41-4.22-.8c-1.24.52-2,.59-2.59,2.28A35,35,0,0,1,90,25.58c-.61-2.06-.15-2.28,1.38-3.28s3.52-2.6,6-2.9,4,.53,6,2,2.83,3.29,3.44,6.35A28.57,28.57,0,0,1,107.47,36.29Z"/>
                <path onClick={() => this.props.onFill(5)} fill={this.props.fillColors[5]} stroke="#000000" d="M99.82,33.85A42.6,42.6,0,0,1,97.9,44.1c-.27-.54-.52-1.08-.76-1.62-1.06-2.45-2.52-6.41-3.66-8.94C93,32.46,92.39,31.23,91.81,30c.63-1.69,1.35-1.76,2.59-2.28,1.44-.61,2.56-.66,4.22.8S99.82,31.4,99.82,33.85Z"/>
                <path onClick={() => this.props.onFill(6)} fill={this.props.fillColors[6]} stroke="#000000" d="M66.26,118.32c-.22-2.27,0-7.34,1.45-9.78a31.41,31.41,0,0,1,6-7.26c2-1.69,4.41-4.21,6.17-5.13a13.28,13.28,0,0,0,3.21-2C84.53,93,85.14,91,82.7,91.49s-4.82.92-6.5,1.22-3.52.79-4.28-1.29-2.76-3.91-4.44-5.74a46.47,46.47,0,0,0-7-5.58,16.36,16.36,0,0,0-3.67-2c-1.3-.53-3.13-.69-1.07,2.45s4.59,6,5.73,8.33S64.5,94.62,64,97.45a17.88,17.88,0,0,1-2.83,6.42c-1.07,1.76-3.21,5-3.14,8.57s1.07,5.35,2.07,8,1.14,3.13,2.9,4a13.75,13.75,0,0,0,4,1.68c1.69.38,1.76-1.22,1.15-2.75S66.46,120.39,66.26,118.32Z"/></g></svg>
        )
    }
}
 