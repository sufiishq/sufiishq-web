import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {AudioService} from "./audio.service";
import { DOCUMENT } from '@angular/common'

@Component({
  selector: 'si-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.css']
})
export class AudioPlayerComponent implements OnInit {

  @Input('track-info') trackInfo = {}

  PlayerStateEnum = PlayerState
  playerState = PlayerState.IDLE
  timeElapsed = '00:00:00'
  duration = '00:00:00'
  seekMaxValue = 1
  seekValue = 0
  showVolumeBox = false
  volume = 100

  private lockSeekbar = false

  constructor(public themeService: ThemeService, private audioService: AudioService, @Inject(DOCUMENT) private dom: HTMLDocument) {}

  ngOnInit(): void {

    this.audioService
      .getPlayerStatus()
      .subscribe((response: string) => {
        switch (response) {
          case 'playing':
            this.duration = this.audioService.getFormattedDuration()
            this.seekMaxValue = this.audioService.getDuration()
            this.playerState = PlayerState.PLAYING
            break

          case 'paused':
            this.playerState = PlayerState.PAUSE
            break

          case 'loading':
            this.playerState = PlayerState.CONNECTING
            break

          case 'ended':
            this.playerState = PlayerState.IDLE
            this.seekValue = 0
            this.timeElapsed = '00:00:00'
            break

          case 'error':
            this.playerState = PlayerState.IDLE
            this.duration = '00:00:00'
            this.seekValue = 0

            break
        }
      })

    this.audioService
      .getTimeElapsed()
      .subscribe((response: string) => {
        this.timeElapsed = response
        if (!this.lockSeekbar) this.seekValue = this.audioService.getCurrentTime()
      })

  }

  doPlay() {

    // play
    if (this.playerState == PlayerState.IDLE) {
      this.audioService.setAudio("https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3")
    }

    // resume
    else {
      this.audioService.playAudio()
    }
  }

  doPause() {
    if (this.playerState == PlayerState.PLAYING) {
      this.audioService.pauseAudio();
    }
  }

  onSeekChanged(value: number | null) {
    if (value == null) return
    console.log(value)
    if (this.playerState == PlayerState.PLAYING || this.playerState == PlayerState.PAUSE) {
      this.audioService.seekAudio(value)
    }
    else {
      this.seekValue = 0
    }
  }

  onFocusSeekbar() {
    if (this.playerState == PlayerState.IDLE || this.playerState == PlayerState.CONNECTING) return
    this.lockSeekbar = true
    this.dom.querySelector('.mat-slider')?.classList.add('cdk-focused', 'cdk-mouse-focused')
  }

  onReleaseSeekbar() {
    this.lockSeekbar = false
    this.dom.querySelector('.mat-slider')?.classList.remove('cdk-focused', 'cdk-mouse-focused')
  }

  setVolume(value: number | null) {
    if (value == null) return
    this.volume = value
    this.audioService.setVolume(value)
  }

  openVolumeBox(event: any) {
    this.showVolumeBox = !this.showVolumeBox
  }

  handleVolumeBoxClicked(event: any) {
    event.stopPropagation()
  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: any) {
    this.showVolumeBox = false
  }
}

export enum PlayerState {
  CONNECTING, PLAYING, IDLE, PAUSE
}
