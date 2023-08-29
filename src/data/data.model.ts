import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Data {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    code:string

    @Column()
    daily_change:string

    @Column()
    close_price: string

    @Column({default: false})
    bist_100:boolean

    @Column({default: false})
    bist_30:boolean

    @Column({default: false})
    msci_turkey: boolean

    @Column()
    equility:string

    @Column()
    paid_in_capital:string

    @Column()
    total_Assets:string

    @Column()
    market_value:string

    @Column()
    free_float_ratio:string

    @Column()
    public_market_value:string

    @Column()
    trading_volumne:string

    @Column()
    net_debt:string

    @Column()
    company_value:String

    @Column()
    old_year_gain:string

    @Column()
    s_four:string

    @Column()
    active_stability: string

    @Column()
    return_on_equity:string

    @Column()
    FK: string

    @Column()
    PD_DD:string

    @Column()
    FD_FAVOK:string

    @Column()
    PD_S:string

    @Column()
    net_dept:string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
    
}