import React from 'react'
import "./Footer.css"
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousOutlinedIcon from '@material-ui/icons/SkipPreviousOutlined';
import SkipNextOutlinedIcon from '@material-ui/icons/SkipNextOutlined';
import ShuffleOutlinedIcon from '@material-ui/icons/ShuffleOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://i.scdn.co/image/ab67616d0000b27365cbc7eff9b65184f7b4c1a9" alt="" />
                <div className="footer__songInfo">
                    <h4>Sorry That I Loved You </h4>
                    <p>Anthony Neely</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleOutlinedIcon className="footer__green" />
                <SkipPreviousOutlinedIcon className="footer__icon" />
                <PlayCircleOutlineOutlinedIcon className="footer__icon" fontSize="large" />
                <SkipNextOutlinedIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}


export default Footer
