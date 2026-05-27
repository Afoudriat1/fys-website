import React from 'react';
import './Page.css';
import './Music.css';

const tracks = [
  {
    title: 'Warfare',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2228888276&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    profileUrl: 'https://soundcloud.com/barsbeyondbarsny',
    trackUrl: 'https://soundcloud.com/barsbeyondbarsny/warfare-3',
  },
  {
    title: '24 Hours',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2228888273&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    profileUrl: 'https://soundcloud.com/barsbeyondbarsny',
    trackUrl: 'https://soundcloud.com/barsbeyondbarsny/24-hours-5',
  },
  {
    title: 'Seek Vengence',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2228888270&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    profileUrl: 'https://soundcloud.com/barsbeyondbarsny',
    trackUrl: 'https://soundcloud.com/barsbeyondbarsny/seek-vengence-4',
  },
  {
    title: 'Time Heals',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2228888267&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    profileUrl: 'https://soundcloud.com/barsbeyondbarsny',
    trackUrl: 'https://soundcloud.com/barsbeyondbarsny/time-heals-1',
  },
  {
    title: 'Locked In',
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2228888264&color=%23ff5500&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true',
    profileUrl: 'https://soundcloud.com/barsbeyondbarsny',
    trackUrl: 'https://soundcloud.com/barsbeyondbarsny/locked-in-2',
  },
];

function Music() {
  return (
    <div className="page">

      <div className="music-grid">
        {tracks.map((track, i) => (
          <div className="music-card" key={track.title}>
            <div className="music-card-header">
              <span className="music-card-number">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="music-card-title">{track.title}</h3>
              <span className="music-card-artist">Bars Beyond Bars</span>
            </div>
            <iframe
              width="100%"
              height="260"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={track.src}
              className="music-player"
              title={`${track.title} by Bars Beyond Bars`}
            ></iframe>
            <div className="soundcloud-attribution">
              <a href={track.profileUrl} target="_blank" rel="noopener noreferrer">Bars Beyond Bars</a>
              {' · '}
              <a href={track.trackUrl} target="_blank" rel="noopener noreferrer">{track.title}</a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Music;
