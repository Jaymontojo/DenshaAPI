BEGIN TRANSACTION;

INSERT INTO 

    stations (station_id, line_name, station_name, ward ) 

VALUES
 
    ('JB03', 'Chuo-Sobu', 'Nishi-Ogikubo', 'Suginami'),
    ('JB04', 'Chuo-Sobu', 'Ogikubo', 'Suginami'),
    ('JB05', 'Chuo-Sobu', 'Asagaya', 'Suginami'),
    ('JB06', 'Chuo-Sobu', 'Kouenji', 'Suginami'),
    ('JB07', 'Chuo-Sobu','Nakano', 'Nakano'),
    ('JB08', 'Chuo-Sobu', 'Higashi-Nakano', 'Nakano'),
    ('JB09', 'Chuo-Sobu', 'Ookubo', 'Shinjuku'),
    ('SJKJB10', 'Chuo-Sobu', 'Shinjuku', 'Shinjuku'),
    ('JB11', 'Chuo-Sobu', 'Yoyogi', 'Shibuya'),
    ('JB12', 'Chuo-Sobu', 'Sendagaya', 'Shibuya'),
    ('JB13', 'Chuo-Sobu', 'Shinanomachi', 'Shinjuku'),
    ('JB14', 'Chuo-Sobu', 'Yotsuya', 'Shinjuku'),
    ('JB15', 'Chuo-Sobu', 'Ichigaya', 'Chiyoda'),
    ('JB16', 'Chuo-Sobu', 'Iidabashi', 'Chiyoda'),
    ('JB17', 'Chuo-Sobu', 'Suidoubashi', 'Chiyoda'),
    ('JB18', 'Chuo-Sobu', 'Ochanomizu', 'Chiyoda'),
    ('AKBJB19', 'Chuo-Sobu', 'Akihabara', 'Chiyoda'),
    ('JB20', 'Chuo-Sobu', 'Asakusabashi', 'Taitou'),
    ('JB21', 'Chuo-Sobu', 'Ryougoku', 'Sumida'),
    ('JB22', 'Chuo-Sobu', 'Kinshichou', 'Sumida'),
    ('JB23', 'Chuo-Sobu', 'Kameido', 'Koutou'),
    ('JB24', 'Chuo-Sobu', 'Hirai', 'Edogawa'),
    ('JB25', 'Chuo-Sobu', 'Shin-Koiwa', 'Katsushika'),
    ('JB26', 'Chuo-Sobu', 'Koiwa', 'Edogawa');

    
    COMMIT;