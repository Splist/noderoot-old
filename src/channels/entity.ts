import { Entity, PrimaryGeneratedColumn, Tree, Column, TreeParent, TreeChildren, OneToOne } from 'typeorm';
import { TextComponent } from '../text/entity';

@Entity()
@Tree('nested-set')
export class Channel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    internalName: string;

    @Column()
    displayName: string;

    @Column('simple-array')
    tags: string[];

    @TreeParent()
    parent: Channel;

    @TreeChildren()
    children: Channel[];

    @OneToOne(type => TextComponent, { nullable: true })
    text?: TextComponent;
}
