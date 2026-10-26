export type Product = {
 id:string; name:string; description:string|null; price:number; compare_at_price:number|null;
 image_url:string|null; category_id:string|null; category_name?:string; stock:number;
 is_active:boolean; is_custom:boolean; variants:any; custom_fields:any;
};
export type Category = {id:string;name:string;image_url:string|null;sort_order:number};