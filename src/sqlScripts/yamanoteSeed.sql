BEGIN TRANSACTION;

INSERT INTO 

    stations (station_id, line_name, station_name, ward ) 

VALUES
 
    ('TYOJY01',	'Yamanote',	'Tokyo', 'Chiyoda'),
    ('KNDJY02',	'Yamanote',	'Kanda', 'Chiyoda'),
    ('AKBJY03',	'Yamanote',	'Akihabara', 'Chiyoda'),
    ('JY04', 'Yamanote', 'Okachimachi', 'Taitou'),
    ('UENJY05',	'Yamanote',	'Ueno', 'Taitou'),
    ('JY06', 'Yamanote', 'Uguisudani', 'Taitou'),
    ('NPRJY07',	'Yamanote',	'Nippori', 'Arakawa'),
    ('JY08', 'Yamanote', 'Nishi-Nippori', 'Arakawa'),
    ('JY09', 'Yamanote', 'Tabata', 'Kita'),
    ('JY10', 'Yamanote', 'Komagome', 'Toshima'),
    ('JY11', 'Yamanote', 'Sugamo', 'Toshima'),
    ('JY12', 'Yamanote', 'Ootsuka', 'Toshima'),
    ('IKBJY13',	'Yamanote',	'Ikebukuro', 'Toshima'),
    ('JY14', 'Yamanote', 'Mejiro', 'Toshima'),
    ('JY15', 'Yamanote', 'Takadanobaba', 'Shinjuku'),
    ('JY16', 'Yamanote', 'Shin-Ookubo',	'Shinjuku'),
    ('SJKJY17',	'Yamanote',	'Shinjuku', 'Shinjuku'),
    ('JY18', 'Yamanote', 'Yoyogi', 'Shibuya'),
    ('JY19', 'Yamanote', 'Harajuku', 'Shibuya'),
    ('SBYJY20',	'Yamanote',	'Shibuya', 'Shibuya'),
    ('EBSJY21',	'Yamanote',	'Ebisu', 'Shibuya'),
    ('JY22', 'Yamanote', 'Meguro', 'Shinagawa'),
    ('JY23', 'Yamanote', 'Gotanda', 'Shinagawa'),
    ('OSKJY24',	'Yamanote',	'Oosaki', 'Shinagawa'),
    ('TGWJY26',	'Yamanote',	'Takanawa-Gateway',	'Minato'),
    ('JY27', 'Yamanote', 'Tamachi', 'Minato'),
    ('HMCJY28',	'Yamanote',	'Hamamatsuchou', 'Minato'),
    ('SMBJY29',	'Yamanote',	'Shimbashi', 'Minato'),
    ('JY30', 'Yamanote', 'Yuurakuchou', 'Chiyoda');
    
    COMMIT;