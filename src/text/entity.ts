import { Entity, OneToOne, PrimaryColumn } from 'typeorm';
import { Channel } from '../channels/entity';

@Entity()
export class TextComponent {

    @PrimaryColumn({ type: 'int' })
    @OneToOne(type => Channel)
    id: Channel;
}
