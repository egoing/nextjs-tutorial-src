const count = {value:0};
export default function handler(req, res) {
  if(req.method === 'PATCH') {
    const body = req.body;
    count.value = body.value;
  }
  res.status(200).json(count)  
}